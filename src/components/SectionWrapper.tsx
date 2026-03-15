import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({ id, children, className = '' }: Props) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-24 px-6 max-w-5xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};
