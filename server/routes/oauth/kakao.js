const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../../models/db');
const generateRandomNickname = require('../../utils/generateNickname');
const getRandomProfileImage = require('../../utils/randomProfileImage');

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = 'http://localhost:5173/oauth/kakao';
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/', async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ success: false, message: 'code 없음' });

  try {
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

    const userRes = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const kakaoUser = userRes.data;
    const kakaoId = kakaoUser.id;
    const email = kakaoUser.kakao_account?.email || '';
    const name = kakaoUser.kakao_account?.name || null;
    const username = `kakao_${kakaoId}`;
    const profileImage = getRandomProfileImage();
    const nickname = generateRandomNickname();

    const [existing] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    let user = existing[0];

    if (!user) {
      const [insertResult] = await db.query(
        'INSERT INTO users (username, email, name, provider, profileImage, nickname) VALUES (?, ?, ?, ?, ?, ?)',
        [username, email, name, 'kakao', profileImage, nickname]
      );
      const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [insertResult.insertId]);
      user = rows[0];
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        nickname: user.nickname,
        profileImage: user.profileImage,
        provider: 'kakao'
      }
    });
  } catch (err) {
    console.error('❌ 카카오 로그인 실패:', err.response?.data || err.message);
    res.status(500).json({ success: false, message: '카카오 로그인 실패' });
  }
});

module.exports = router;
