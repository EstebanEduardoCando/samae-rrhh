import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';
import { useAuthStore } from '../store/useAuthStore';

export default function Dashboard() {
  const logout = useAuthStore((state) => state.logout);
  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="mb-2">Dashboard</h2>
        <Button onClick={logout}>Sign Out</Button>
      </div>
    </div>
  );
}