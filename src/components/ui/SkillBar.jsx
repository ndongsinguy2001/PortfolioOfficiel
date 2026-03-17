import { motion } from 'framer-motion';

const SkillBar = ({ name, level, color = 'bg-primary' }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className={`h-2.5 rounded-full ${color}`}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;