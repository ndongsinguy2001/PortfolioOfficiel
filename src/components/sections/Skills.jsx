import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub,
  SiTailwindcss, SiPostgresql, SiSocketdotio
} from 'react-icons/si';
import { FaFileExcel, FaFileWord, FaFilePowerpoint } from 'react-icons/fa';
import { FiUsers, FiShield } from 'react-icons/fi';

const skills = [
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: SiCss, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-600 dark:text-gray-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'GitHub', icon: SiGithub, color: 'text-black dark:text-white' },
  { name: 'GRC', icon: FiUsers, color: 'text-blue-600' },
  { name: 'Gestion des risques de Crédit Bancaires', icon: FiShield, color: 'text-red-600' },
  { name: 'Excel', icon: FaFileExcel, color: 'text-green-600' },
  { name: 'Word', icon: FaFileWord, color: 'text-blue-600' },
  { name: 'PowerPoint', icon: FaFilePowerpoint, color: 'text-orange-600' },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>{t('skills.title')}</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <Icon className={`text-4xl mb-2 ${skill.color}`} />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;