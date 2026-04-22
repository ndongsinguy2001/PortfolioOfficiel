import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            NDONG SINGUY<span className="text-secondary">.</span>
          </Link>

          {/* Menu desktop (caché sur mobile) */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Bouton hamburger (visible sur mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            aria-label="Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-2 py-1 transition-colors ${
                    isActive(link.to)
                      ? 'text-primary font-semibold'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary'
                  }`}
                >
                  {t(link.label)}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-2 pt-2">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;