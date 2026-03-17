import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../../utils/constants';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* blobs, animations... (inchangé) */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo de profil (inchangé) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
              <img
                src="/images/profile/profile.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Contenu texte avec traductions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Mr Stratège
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-16">
              <TypeAnimation
                sequence={[
                  t('hero.greeting'),
                  2000,
                  t('hero.certified'),
                  2000,
                  t('hero.passionate'),
                  2000,
                  t('hero.creator'),
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Link
                to="/projets"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
              >
                {t('hero.viewProjects')}
              </Link>
              <a
                href={personalInfo.cvUrl}
                download
                className="px-6 py-3 border-2 border-primary text-primary dark:text-white dark:border-white rounded-lg hover:bg-primary hover:text-white transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <FiDownload /> {t('hero.downloadCV')}
              </a>
            </div>

            {/* Réseaux sociaux (inchangé) */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="GitHub"><FiGithub size={20} /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
              <a href={`mailto:${personalInfo.email}`} className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Email"><FiMail size={20} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;