import Button from '../components/atoms/Button';
import { useAuthStore } from '../store/useAuthStore';

export default function Login() {
  const login = useAuthStore((state) => state.login);
  return (
    <div className="p-4">
      <h2 className="mb-2">Login Page</h2>
      <Button onClick={login}>Sign In</Button>
    </div>
  );
}