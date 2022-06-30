import React from 'react';

const CustomMainBanner = () => {
  return (
    <>
      <section
        style={{
          width: '100%',
          height: '450px',
          background: 'red',
        }}
      >
        <section
          style={{
            width: '100vw',
            height: '450px',
            background: 'blue',
            position: 'absolute',
            left: '0px',
          }}
        >
          Hola mundo
        </section>
      </section>
    </>
  );
};

export default CustomMainBanner;
