import logo from '../../assets/logo.svg';
import menuIcon from '../../assets/icons/menu.svg';

interface HeaderProps {
  onMenuClick?: () => void;
}
export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center p-4">
        <button
          className="md:hidden mr-3"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <img src={menuIcon} alt="menu" className="w-6 h-6" />
        </button>
        <img src={logo} alt="SAMAE logo" className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-semibold text-gray-800">SAMAE - RRHH</h1>
      </div>
    </header>
  );
}
