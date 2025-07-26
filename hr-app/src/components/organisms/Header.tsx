import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center p-4">
        <img src={logo} alt="SAMAE logo" className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-semibold text-gray-800">SAMAE - RRHH</h1>
      </div>
    </header>
  );
}
