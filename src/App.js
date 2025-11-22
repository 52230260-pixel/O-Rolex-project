import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [page, setPage] = useState('home');

  // Add watch to cart or increment quantity if it already exists
  const addToCart = (watch) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === watch.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...watch, quantity: 1 }];
      }
    });
  };

  // Remove watch from cart by id
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Switch page handler
  const handlePageChange = (page) => setPage(page);

  return (
    <div>
      <Navbar onChangePage={handlePageChange} />

      {page === 'home' && <Home onBuy={addToCart} />}

      {page === 'cart' && <Cart items={cartItems} onRemove={removeFromCart} />}

      {page === 'contact' && <Contact />}

      {page === 'about' && <About />}
    </div>
  );
}

export default App;
