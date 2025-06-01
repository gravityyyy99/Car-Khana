import React from 'react';

const CarSection = ({ title, description }) => {
  return (
    <div className="car-section">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CarSection;