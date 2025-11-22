import React, { useState } from 'react';

function Navbar({ onChangePage }) {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
    onChangePage(page);
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      fontFamily: "'Helvetica Neue', Arial, sans-serif"
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        
        {/* Logo */}
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '300',
          letterSpacing: '0.1em',
          fontStyle: 'italic',
          color: '#fff',
          cursor: 'pointer'
        }}
        onClick={() => handlePageChange('home')}
        >
          O-Rolex
        </div>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          <button 
            onClick={() => handlePageChange('home')}
            style={{
              background: 'none',
              border: 'none',
              color: activePage === 'home' ? '#fff' : '#888',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: activePage === 'home' ? '400' : '300',
              letterSpacing: '0.05em',
              padding: '0.5rem 0',
              position: 'relative',
              transition: 'color 0.3s',
              textTransform: 'uppercase',
              fontFamily: "'Helvetica Neue', Arial, sans-serif"
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseOut={(e) => activePage !== 'home' && (e.currentTarget.style.color = '#888')}
          >
            Watches
            {activePage === 'home' && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: '#fff'
              }}></div>
            )}
          </button>

          <button 
            onClick={() => handlePageChange('about')}
            style={{
              background: 'none',
              border: 'none',
              color: activePage === 'about' ? '#fff' : '#888',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: activePage === 'about' ? '400' : '300',
              letterSpacing: '0.05em',
              padding: '0.5rem 0',
              position: 'relative',
              transition: 'color 0.3s',
              textTransform: 'uppercase',
              fontFamily: "'Helvetica Neue', Arial, sans-serif"
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseOut={(e) => activePage !== 'about' && (e.currentTarget.style.color = '#888')}
          >
            About
            {activePage === 'about' && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: '#fff'
              }}></div>
            )}
          </button>

          <button 
            onClick={() => handlePageChange('contact')}
            style={{
              background: 'none',
              border: 'none',
              color: activePage === 'contact' ? '#fff' : '#888',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: activePage === 'contact' ? '400' : '300',
              letterSpacing: '0.05em',
              padding: '0.5rem 0',
              position: 'relative',
              transition: 'color 0.3s',
              textTransform: 'uppercase',
              fontFamily: "'Helvetica Neue', Arial, sans-serif"
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseOut={(e) => activePage !== 'contact' && (e.currentTarget.style.color = '#888')}
          >
            Contact
            {activePage === 'contact' && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: '#fff'
              }}></div>
            )}
          </button>

        </div>

        {/* Cart Button */}
        <button 
          onClick={() => handlePageChange('cart')}
          style={{
            background: activePage === 'cart' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '300',
            letterSpacing: '0.05em',
            padding: '0.7rem 1.5rem',
            borderRadius: '2px',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textTransform: 'uppercase',
            fontFamily: "'Helvetica Neue', Arial, sans-serif"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = activePage === 'cart' ? 'rgba(255, 255, 255, 0.1)' : 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Cart
        </button>

      </div>
    </nav>
  );
}

export default Navbar;