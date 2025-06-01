import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import Merch from './pages/Merch';
import CarCategory from './pages/CarCategory'; // Import the new component

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:category" element={<CarCategory />} /> {/* New route */}
          <Route path="/merch" element={<Merch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;