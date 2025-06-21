require('dotenv').config(); // ✅ .env 파일 불러오기

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const authRoutes = require('./routes/auth');
const oauthRoutes = require('./routes/oauth');
const findIdRouter = require('./routes/auth/findId');

const app = express();
const isDev = process.env.NODE_ENV !== 'production';

// ✅ 세션 스토어 설정
const sessionStore = new MySQLStore({
  host: 'localhost',
  user: 'root',
  password: 'Rhddbrhdfyd1979!!',
  database: 'baeooda',
  clearExpired: true,
  checkExpirationInterval: 60 * 1000,
  expiration: 1000 * 60 * 60 * 2,
});

// ✅ 개발 환경에서는 서버 시작 시 세션 전체 삭제
if (isDev) {
  sessionStore.clear((err) => {
    if (err) {
      console.error('❌ 세션 초기화 실패:', err.message);
    } else {
      console.log('🧹 개발 모드: 기존 세션 모두 삭제됨');
    }
  });
}

// ✅ 세션 미들웨어
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 2, // 2시간
  },
}));

// ✅ CORS 설정
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// ✅ 요청 바디 JSON 파싱
app.use(express.json());

// ✅ 라우터 등록
app.use('/api/auth', authRoutes);
app.use('/api/auth/find-id', findIdRouter);
app.use('/api/oauth', oauthRoutes);

// ✅ 서버 시작
app.listen(5000, () => {
  console.log('🚀 서버 실행 중 (http://localhost:5000)');
});
