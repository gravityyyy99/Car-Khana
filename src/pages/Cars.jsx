import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cars.css'; // Import the CSS file for styling

const Cars = () => {
  const navigate = useNavigate();

  // Sample data for cars
  const sportsCars = [
    { id: 1, name: 'Porsche 911', image: '/sports1.jpg', description: 'A legendary sports car with unmatched performance.' },
    { id: 2, name: 'Ferrari 488', image: '/sports2.jpg', description: 'Italian engineering at its finest.' },
    { id: 3, name: 'Lamborghini Huracan', image: '/sports3.jpeg', description: 'Exotic design and raw power.' },
    { id: 4, name: 'Audi R8', image: '/sports4.jpeg', description: 'A blend of luxury and performance.' },
    { id: 5, name: 'McLaren 720S', image: '/sports5.jpeg', description: 'Cutting-edge technology and speed.' },
  ];

  const f1Cars = [
    { id: 1, name: 'Mercedes-AMG F1', image: '/f11.jpeg', description: 'Dominating the F1 circuits.' },
    { id: 2, name: 'Red Bull Racing RB18', image: '/f12.jpg', description: 'Aerodynamic excellence.' },
    { id: 3, name: 'Ferrari SF21', image: '/f13.jpeg', description: 'The prancing horse of F1.' },
    { id: 4, name: 'McLaren MCL35', image: '/f14.jpg', description: 'Innovation on the track.' },
    { id: 5, name: 'Aston Martin AMR22', image: '/f15.jpeg', description: 'British engineering at its best.' },
  ];

  const luxuryCars = [
    { id: 1, name: 'Rolls-Royce Phantom', image: '/luxury1.jpg', description: 'The pinnacle of luxury.' },
    { id: 2, name: 'Bentley Continental GT', image: '/luxury2.jpg', description: 'Grand touring redefined.' },
    { id: 3, name: 'Mercedes-Benz S-Class', image: '/luxury3.jpg', description: 'The ultimate luxury sedan.' },
    { id: 4, name: 'Audi A8', image: '/luxury4.jpeg', description: 'Sophistication and technology.' },
    { id: 5, name: 'BMW 7 Series', image: '/luxury5.jpg', description: 'Luxury meets performance.' },
  ];

  // Function to handle "View All" click
  const handleViewAll = (section) => {
    navigate(`/cars/${section}`);
  };

  return (
    <div className="cars">
      {/* Sports Cars Section */}
      <div className="car-section">
        <h2>Sports Cars</h2>
        <div className="car-grid">
          {sportsCars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} />
              <h3>{car.name}</h3>
              <p>{car.description}</p>
            </div>
          ))}
        </div>
        <button className="view-all" onClick={() => handleViewAll('sports')}>
          View All →
        </button>
      </div>

      {/* F1 Cars Section */}
      <div className="car-section">
        <h2>F1 Cars</h2>
        <div className="car-grid">
          {f1Cars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} />
              <h3>{car.name}</h3>
              <p>{car.description}</p>
            </div>
          ))}
        </div>
        <button className="view-all" onClick={() => handleViewAll('f1')}>
          View All →
        </button>
      </div>

      {/* Luxury Cars Section */}
      <div className="car-section">
        <h2>Luxury Cars</h2>
        <div className="car-grid">
          {luxuryCars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} />
              <h3>{car.name}</h3>
              <p>{car.description}</p>
            </div>
          ))}
        </div>
        <button className="view-all" onClick={() => handleViewAll('luxury')}>
          View All →
        </button>
      </div>
    </div>
  );
};

export default Cars;