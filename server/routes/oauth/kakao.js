const express = require('express');
const axios = require('axios');
const router = express.Router();
const db = require('../../models/db');
const generateRandomNickname = require('../../utils/generateNickname');
const getRandomProfileImage = require('../../utils/randomProfileImage');

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = 'http://localhost:5173/oauth/kakao';

router.post('/', async (req, res) => {
  const { code } = req.body; // ✅ 여기 수정
  if (!code) return res.status(400).json({ success: false, message: 'code 없음' });

  try {
    // 🔑 1. 액세스 토큰 발급
    const tokenRes = await axios.post('https://kauth.kakao.com/oauth/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: KAKAO_CLIENT_ID,
        redirect_uri: KAKAO_REDIRECT_URI,
        code,
      },
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    const access_token = tokenRes.data.access_token;

    // 👤 2. 사용자 정보 조회
    const userRes = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const kakaoUser = userRes.data;
    const kakaoId = kakaoUser.id;
    const email = kakaoUser.kakao_account?.email || '';
    const username = `kakao_${kakaoId}`;
    const profileImage = getRandomProfileImage();
    const nickname = generateRandomNickname();

    // 🧾 3. DB에 유저 저장 or 조회
    const [existing] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    let user = existing[0];

    if (!user) {
     const name = kakaoUser.kakao_account?.name || null; // ✅ name 정보 없으면 null

      const [insertResult] = await db.query(
        'INSERT INTO users (username, email, name, provider, profileImage, nickname) VALUES (?, ?, ?, ?, ?, ?)',
        [username, email, name, 'kakao', profileImage, nickname]
      );
      const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [insertResult.insertId]);
      user = rows[0];
    }

    // 🪪 4. 세션 저장
    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      nickname: user.nickname,
      profileImage: user.profileImage,
      provider: 'kakao',
    };

    res.json({ success: true, user: req.session.user });
  } catch (err) {
    console.error('❌ 카카오 로그인 실패:', err.response?.data || err.message);
    res.status(500).json({ success: false, message: '카카오 로그인 실패' });
  }
});

module.exports = router;
