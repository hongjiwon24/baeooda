// pages/Profile.jsx
import { useUser } from '../contexts/UserContext';

export default function Profile() {
  const { user } = useUser();

  if (!user) return <p>로그인이 필요합니다</p>;

  return (
    <div>
      <h2>마이페이지</h2>
      <p>이름: {user.name}</p>
      <p>이메일: {user.email}</p>
      <p>생년월일: {user.birth}</p>
    </div>
  );
}
