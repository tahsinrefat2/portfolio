import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealOnScroll: React.FC<Props> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
