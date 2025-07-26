import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';

export default function Landing() {
  return (
    <div className="p-4">
      <h2 className="mb-2">Landing Page</h2>
      <Link to="/login">
        <Button>Go to Login</Button>
      </Link>
    </div>
  );
}