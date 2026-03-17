import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: '/', label: 'nav.home' },
    { to: '/projets', label: 'nav.projects' },
    { to: '/competences', label: 'nav.skills' },
    { to: '/a-propos', label: 'nav.about' },
    { to: '/contact', label: 'nav.contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Mr Stratège<span className="text-secondary">.</span>
        </Link>
        <div className="flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors ${
                isActive(link.to)
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 dark:text-gray-200 hover:text-primary'
              }`}
            >
              {t(link.label)}
            </Link>
          ))}
          <LanguageSwitcher />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Changer le thème"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;