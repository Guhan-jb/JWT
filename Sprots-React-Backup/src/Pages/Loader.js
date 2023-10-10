import React from 'react';
import '../Assets/CSS/Loader.css'; // Import the loader CSS file

const LoaderContainer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
  <div className="loader"></div>
</div>
      );
};

export default LoaderContainer;