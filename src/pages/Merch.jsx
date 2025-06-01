import React, { useState } from 'react';
import './Merch.css'; // Import the CSS file for styling

const Merch = () => {
  const [cart, setCart] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered item

  // Sample merchandise data
  const merchandise = [
    { id: 1, name: 'Racing Helmet', price: 5999, image: '/helmet.webp' },
    { id: 2, name: 'Racing Gloves', price: 3799, image: '/gloves.webp' },
    { id: 3, name: 'Racing Suit', price: 8999, image: '/suit.webp' },
    { id: 4, name: 'Racing Boots', price: 10999, image: '/boots.webp' },
    { id: 5, name: 'Racing Glasses', price: 7999, image: '/glasses.webp' },
  ];

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    alert(`Total Amount: ₹${calculateTotal()}\nThank you for your purchase!`);
    setCart([]); // Clear the cart after checkout
  };

  return (
    <div className="merch">
      <h1>Merchandise for Racers</h1>
      <div className="merch-grid">
        {merchandise.map((item) => (
          <div
            key={item.id}
            className="merch-card"
            onMouseEnter={() => setHoveredItem(item)} // Show preview on hover
            onMouseLeave={() => setHoveredItem(null)} // Hide preview when not hovered
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>

            {/* Preview on Hover */}
            {hoveredItem?.id === item.id && (
              <div className="preview">
                <img src={item.image} alt={`${item.name} Preview`} />
                <p>{item.name} - ₹{item.price}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>
            <p>Total: ₹{calculateTotal()}</p>
            <button onClick={handleCheckout}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Merch;