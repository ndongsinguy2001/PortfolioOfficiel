import { useTranslation } from 'react-i18next';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex items-center gap-2"
            >
              <FiExternalLink /> {t('projects.viewProject')}
            </a>
          ) : (
            <span className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed">
              {t('projects.noDemo')}
            </span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center gap-1"
              title={t('projects.code')}
            >
              <FiGithub size={20} />
              <span className="text-sm">{t('projects.code')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;