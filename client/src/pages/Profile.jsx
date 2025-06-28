import { useUser } from '../contexts/UserContext';

export default function Profile() {
  const { user } = useUser();

  if (!user) return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <p className="text-gray-600 text-lg">로그인이 필요합니다</p>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">마이페이지</h2>
        <div className="space-y-4 text-gray-700 text-base">
          <div>
            <span className="font-semibold">이름: </span>{user.name}
          </div>
          <div>
            <span className="font-semibold">이메일: </span>{user.email}
          </div>
          <div>
            <span className="font-semibold">생년월일: </span>{user.birth}
          </div>
        </div>
      </div>
    </div>
  );
}
