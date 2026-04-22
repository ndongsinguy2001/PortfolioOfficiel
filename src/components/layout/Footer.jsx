import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { personalInfo } from '../../utils/constants';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: '/', label: 'nav.home' },
    { to: '/projets', label: 'nav.projects' },
    { to: '/competences', label: 'nav.skills' },
    { to: '/a-propos', label: 'nav.about' },
    { to: '/contact', label: 'nav.contact' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">NDONG SINGUY</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t('footer.description')}</p>
            <div className="flex space-x-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="GitHub"><FiGithub size={20} /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Email"><FiMail size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FiMail className="text-primary" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">{personalInfo.email}</a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FiPhone className="text-primary" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary">{personalInfo.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FiMapPin className="text-primary" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} {personalInfo.name}. {t('footer.rights')} | {t('footer.designed')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;