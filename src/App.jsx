// App.jsx
import Router from './router/router';
import { UserProvider } from './contexts/UserContext'; // ✅ 꼭 포함

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
