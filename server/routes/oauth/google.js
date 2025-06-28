const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../../models/db');
const generateRandomNickname = require('../../utils/generateNickname');
const getRandomProfileImage = require('../../utils/randomProfileImage');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = 'http://localhost:5173/oauth/google';
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/', async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ success: false, message: 'code 없음' });

  try {
    const tokenRes = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    const access_token = tokenRes.data.access_token;

    const userRes = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const googleUser = userRes.data;
    const googleId = googleUser.id;
    const email = googleUser.email || '';
    const name = googleUser.name || null;
    const username = `google_${googleId}`;
    const profileImage = getRandomProfileImage();
    const nickname = generateRandomNickname();

    const [existing] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    let user = existing[0];

    if (!user) {
      const [insertResult] = await db.query(
        'INSERT INTO users (username, email, name, provider, profileImage, nickname) VALUES (?, ?, ?, ?, ?, ?)',
        [username, email, name, 'google', profileImage, nickname]
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
        provider: 'google'
      }
    });
  } catch (err) {
    console.error('❌ 구글 로그인 실패:', err.response?.data || err.message);
    res.status(500).json({ success: false, message: '구글 로그인 실패' });
  }
});

module.exports = router;
