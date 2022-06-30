import { motion } from 'framer-motion';
import React from 'react';
import { Placeholder } from 'react-bootstrap';

const MainCarouselSkeleton = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1.2 }}
      transition={{ duration: 1.5 }}
    >
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} style={{ width: '100%', height: '450px' }} />
      </Placeholder>
    </motion.div>
  );
};

export default MainCarouselSkeleton;
