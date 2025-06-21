const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models/db');
const generateRandomNickname = require('../utils/generateNickname'); // ✅ 닉네임 생성기 import

const router = express.Router();

// ✅ 회원가입
router.post('/register', async (req, res) => {
  const { name, username, email, password, birthday, profileImage } = req.body;

  try {
    console.log('📥 회원가입 요청 데이터:', { username, email, birthday, profileImage });

    const hashedPassword = await bcrypt.hash(password, 10);
    const nickname = generateRandomNickname(); // ✅ 랜덤 닉네임 생성

   const sql = 'INSERT INTO users (name, username, email, password, birthday, profileImage, nickname) VALUES (?, ?, ?, ?, ?, ?, ?)';
  await db.query(sql, [name, username, email, hashedPassword, birthday, profileImage, nickname]);


    res.status(201).json({ message: '회원가입 되었습니다.', nickname });
  } catch (err) {
    console.error('회원가입 오류:', err.message);
    console.error(err.stack);
    res.status(500).json({ error: '서버 오류: ' + err.message });
  }
});

// ✅ 로그인
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    const user = users[0];

    if (!user) return res.status(401).json({ message: '아이디 틀림' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: '비밀번호 틀림' });

    // ✅ 닉네임 없을 경우 자동 생성 후 DB에 저장
    if (!user.nickname) {
      const newNickname = generateRandomNickname();
      await db.query('UPDATE users SET nickname = ? WHERE id = ?', [newNickname, user.id]);
      user.nickname = newNickname;
    }

    // ✅ 세션에 저장 (선택)
    req.session.user = user;

    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      birthday: user.birthday,
      profileImage: user.profileImage,
      nickname: user.nickname,
      provider: user.provider || 'local'
    });

  } catch (err) {
    console.error('로그인 오류:', err.message);
    console.error(err.stack);
    res.status(500).json({ error: '서버 내부 오류: ' + err.message });
  }
});

// ✅ 로그아웃
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('세션 삭제 실패:', err);
      return res.status(500).json({ message: '로그아웃 실패' });
    }
    res.clearCookie('connect.sid'); // 세션 쿠키 삭제
    return res.json({ message: '로그아웃 완료' });
  });
});

// ✅ 세션 체크 API (프론트에서 로그인 상태 복구용)
router.get('/check-session', (req, res) => {
  if (req.session && req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ message: '로그인 안됨' });
  }
});

module.exports = router;
