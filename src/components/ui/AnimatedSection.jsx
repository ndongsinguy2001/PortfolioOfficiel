import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({
  children,
  className = '',
  variants,
  initial = 'hidden',
  whileInView = 'visible',
  viewport = { once: true, margin: '-100px' },
  transition,
}) => {
  const [ref, inView] = useInView(viewport);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? whileInView : initial}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;