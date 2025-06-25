const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models/db');
const generateRandomNickname = require('../utils/generateNickname');
const getRandomProfileImage = require('../utils/randomProfileImage'); // ✅ 랜덤 이미지 유틸 추가

const router = express.Router();

// ✅ 회원가입
router.post('/signup', async (req, res) => {
  let { name, email, username, password, year, month, day, profileImage } = req.body;

  try {
    // ✅ 아이디 중복 검사
    const [idCheck] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (idCheck.length > 0) {
      return res.status(400).json({ message: '이미 존재하는 아이디입니다.' });
    }

    // ✅ 이메일 중복 검사
    const [emailCheck] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (emailCheck.length > 0) {
      return res.status(400).json({ message: '이미 사용 중인 이메일입니다.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const nickname = generateRandomNickname();
    if (!profileImage) profileImage = getRandomProfileImage();

    const sql = `INSERT INTO users (name, email, username, password, year, month, day, profileImage, nickname, provider)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'local')`;

    await db.query(sql, [name, email, username, hashedPassword, year, month, day, profileImage, nickname]);

    res.status(201).json({ message: '회원가입 되었습니다.', nickname });
  } catch (err) {
    console.error('회원가입 오류:', err.message);
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

    // ✅ 프로필 이미지 없을 경우 랜덤 이미지로 설정 후 DB에 저장
    if (!user.profileImage) {
      const newImage = getRandomProfileImage();
      await db.query('UPDATE users SET profileImage = ? WHERE id = ?', [newImage, user.id]);
      user.profileImage = newImage;
    }

    // ✅ 세션에 저장
    req.session.user = user;

    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      year: user.year,
      month: user.month,
      day: user.day,
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
    res.clearCookie('connect.sid');
    return res.json({ message: '로그아웃 완료' });
  });
});

// ✅ 세션 체크 API
router.get('/check-session', (req, res) => {
  if (req.session && req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ message: '로그인 안됨' });
  }
});

module.exports = router;
