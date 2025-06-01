import React from 'react';


const Home = () => {
  return (
    <div className="home">
      {/* Video Section */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="welcome-message">
          <h1>Welcome to the Multiverse of Cars</h1>
        </div>
      </div>

      
    </div>
  );
};

export default Home;