import { motion } from 'framer-motion';

const TimelineItem = ({ title, subtitle, period, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
      <div className="mb-1">
        <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-primary font-medium mb-2">{subtitle}</p>
      {description && <p className="text-gray-600 dark:text-gray-300">{description}</p>}
    </motion.div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="mt-8">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;