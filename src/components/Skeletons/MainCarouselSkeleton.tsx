import { motion } from 'framer-motion';
import React from 'react';
import { Placeholder } from 'react-bootstrap';

const MainCarouselSkeleton = () => {
  return (
    <motion.div
      style={{ height: '500px' }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section
        style={{
          width: '100%',
          height: '500px',
          position: 'absolute',
          left: '0px',
        }}
      >
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} style={{ width: '100%', height: '450px' }} />
        </Placeholder>
      </section>
    </motion.div>
  );
};

export default MainCarouselSkeleton;
