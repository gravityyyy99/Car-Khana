import React from 'react';
import { useParams } from 'react-router-dom';
import './CarCategory.css'; // Import the CSS file for styling

const CarCategory = () => {
  const { category } = useParams();

  // Sample data for cars
  const cars = {
    sports: [
      { id: 1, name: 'Porsche 911', image: '/sports1.jpg' },
      { id: 2, name: 'Ferrari 488', image: '/sports2.jpg' },
      { id: 3, name: 'Lamborghini Huracan', image: '/sports3.jpeg' },
      { id: 4, name: 'Audi R8', image: '/sports4.jpeg' },
      { id: 5, name: 'McLaren 720S', image: '/sports5.jpeg' },
      { id: 6, name: 'Chevrolet Corvette', image: '/sports6.jpg' },
      { id: 7, name: 'Nissan GT-R', image: '/sports7.jpg' },
    ],
    f1: [
      { id: 1, name: 'Mercedes-AMG F1', image: '/f11.jpeg' },
      { id: 2, name: 'Red Bull Racing RB18', image: '/f12.jpg' },
      { id: 3, name: 'Ferrari SF21', image: '/f13.jpeg' },
      { id: 4, name: 'McLaren MCL35', image: '/f14.jpg' },
      { id: 5, name: 'Aston Martin AMR22', image: '/f15.jpeg' },
      { id: 6, name: 'Alpine A521', image: '/f16.jpg' },
      { id: 7, name: 'AlphaTauri AT02', image: '/f17.jpg' },
    ],
    luxury: [
      { id: 1, name: 'Rolls-Royce Phantom', image: '/luxury1.jpg' },
      { id: 2, name: 'Bentley Continental GT', image: '/luxury2.jpg' },
      { id: 3, name: 'Mercedes-Benz S-Class', image: '/luxury3.jpg' },
      { id: 4, name: 'Audi A8', image: '/luxury4.jpeg' },
      { id: 5, name: 'BMW 7 Series', image: '/luxury5.jpg' },
      { id: 6, name: 'Lexus LS', image: '/luxury6.jpg' },
      { id: 7, name: 'Jaguar XJ', image: '/luxury7.jpg' },
    ],
  };

  return (
    <div className="car-category">
      <h1>{category.toUpperCase()} Cars</h1>
      <div className="car-grid">
        {cars[category].map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarCategory;