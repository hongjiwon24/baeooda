require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const authRoutes = require('./routes/auth');
const oauthRoutes = require('./routes/oauth');
const findIdRouter = require('./routes/auth/findId');
const emailRoutes = require('./routes/email'); // ✅ 이메일 라우터 추가

const app = express();
const isDev = process.env.NODE_ENV !== 'production';

const sessionStore = new MySQLStore({
  host: 'localhost',
  user: 'root',
  password: 'Rhddbrhdfyd1979!!',
  database: 'baeooda_db',
  clearExpired: true,
  checkExpirationInterval: 60 * 1000,
  expiration: 1000 * 60 * 60 * 2,
});

if (isDev) {
  sessionStore.clear((err) => {
    if (err) {
      console.error('❌ 세션 초기화 실패:', err.message);
    } else {
      console.log('🧹 개발 모드: 기존 세션 모두 삭제됨');
    }
  });
}

app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 2,
  },
}));

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

// ✅ 라우터 등록
app.use('/api/auth', authRoutes);
app.use('/api/auth/find-id', findIdRouter);
app.use('/api/oauth', oauthRoutes);
app.use('/api/email', emailRoutes); // ✅ 추가된 라우터

app.listen(5000, () => {
  console.log('🚀 서버 실행 중 (http://localhost:5000)');
});
