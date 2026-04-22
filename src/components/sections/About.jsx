import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo } from '../../utils/constants';
import Timeline from '../ui/Timeline';
import SkillBar from '../ui/SkillBar';
import { experiences, formations } from '../../utils/constants';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <SectionTitle>{t('about.title')}</SectionTitle>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3"
          >
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary">
              <img
                src="/images/profile/profile.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">NDONG SINGUY</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t('about.description1')}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t('about.description2')}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t('about.description3')}</p>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('about.experiences')}</h3>
            <Timeline items={experiences} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('about.formations')}</h3>
            <Timeline items={formations} />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">{t('about.technicalSkills')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillBar name="React" level={85} color="bg-cyan-400" />
            <SkillBar name="Node.js" level={80} color="bg-green-600" />
            <SkillBar name="MongoDB" level={75} color="bg-green-500" />
            <SkillBar name="Tailwind CSS" level={90} color="bg-cyan-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;