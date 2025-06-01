import React from 'react';
import './About.css'; // Import the CSS file for animations

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to the <span className="highlight">Multiverse of Cars</span>, where passion meets innovation. We are a team of car enthusiasts dedicated to bringing you the best in automotive excellence. From sports cars to luxury vehicles, we celebrate the art and engineering of automobiles.
        </p>
        <p className="about-description">
          Our mission is to provide you with an unforgettable experience, whether you're exploring our collection or learning about the history of iconic cars. Join us on this journey through the world of automotive marvels.
        </p>
      </div>
    </div>
  );
};

export default About;