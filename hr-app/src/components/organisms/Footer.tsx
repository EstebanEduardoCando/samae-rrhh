import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        <p className="text-sm text-gray-500">&copy; {year} SAMAE</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" aria-label="LinkedIn">
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagram} alt="Instagram" className="w-5 h-5" />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <img src={twitter} alt="X" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
