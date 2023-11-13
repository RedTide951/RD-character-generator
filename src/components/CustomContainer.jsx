import React from 'react';

const CustomContainer = ({ children }) => {
  const containerStyle = {
    marginTop: '20px',
    border: '1px solid #ccc',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'column',  // Updated flexDirection to 'column'
    alignItems: 'flex-start',  // Align items from top to bottom
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default CustomContainer;
