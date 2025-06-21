const express = require('express');
const router = express.Router();
const db = require('../../models/db');

// POST /api/auth/find-id
router.post('/', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, message: '이름과 이메일을 모두 입력해주세요.' });
  }

  try {
    const [rows] = await db.query(
      'SELECT username FROM users WHERE name = ? AND email = ?',
      [name, email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: '일치하는 사용자 정보가 없습니다.' });
    }

    return res.json({ success: true, username: rows[0].username });
  } catch (err) {
    console.error('❌ 아이디 찾기 실패:', err);
    return res.status(500).json({ success: false, message: '서버 오류' });
  }
});

module.exports = router;
