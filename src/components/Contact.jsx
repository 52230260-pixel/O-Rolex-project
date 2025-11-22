import React from 'react';

function Contact() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#000', 
      color: '#fff',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Grid Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.3
      }}></div>

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at top, rgba(50,50,50,0.3), transparent 50%)'
      }}></div>

      <div style={{
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '6rem 4rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <div style={{
            fontSize: '0.9rem',
            letterSpacing: '0.3em',
            color: '#666',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            fontWeight: '500'
          }}>
            Get In Touch
          </div>
          <h1 style={{
            fontSize: '5rem',
            fontWeight: '200',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
            lineHeight: '1'
          }}>
            Contact Us
          </h1>
          <div style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #fff, transparent)',
            margin: '0 auto 2rem'
          }}></div>
          <p style={{
            fontSize: '1.1rem',
            color: '#999',
            fontWeight: '300',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            We're here to assist you with any inquiries about our exclusive timepiece collection. Reach out through your preferred channel.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          
          {/* WhatsApp Card */}
          <div 
            style={{
              background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
              padding: '3rem 2rem',
              borderRadius: '2px',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.3)';
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(37, 211, 102, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => window.open('https://wa.me/96181126743', '_blank')}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #25D366, #128C7E)',
              opacity: 0.6
            }}></div>
            
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(37, 211, 102, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
              border: '1px solid rgba(37, 211, 102, 0.2)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            
            <div style={{
              fontSize: '0.8rem',
              color: '#666',
              marginBottom: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: '500'
            }}>
              WhatsApp
            </div>
            <div style={{
              fontSize: '1.4rem',
              fontWeight: '300',
              color: '#fff',
              letterSpacing: '0.02em'
            }}>
              +961 81 126 743
            </div>
          </div>

          {/* Instagram Card */}
          <div 
            style={{
              background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
              padding: '3rem 2rem',
              borderRadius: '2px',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(228, 64, 95, 0.3)';
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(228, 64, 95, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => window.open('https://instagram.com/omaralwaridi', '_blank')}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #E4405F, #9B2C9B, #F77737)',
              opacity: 0.6
            }}></div>
            
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(228, 64, 95, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
              border: '1px solid rgba(228, 64, 95, 0.2)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            
            <div style={{
              fontSize: '0.8rem',
              color: '#666',
              marginBottom: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: '500'
            }}>
              Instagram
            </div>
            <div style={{
              fontSize: '1.4rem',
              fontWeight: '300',
              color: '#fff',
              letterSpacing: '0.02em'
            }}>
              @omaralwaridi
            </div>
          </div>

          {/* Facebook Card */}
          <div 
            style={{
              background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
              padding: '3rem 2rem',
              borderRadius: '2px',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(24, 119, 242, 0.3)';
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(24, 119, 242, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => window.open('https://facebook.com/omaralwaridi', '_blank')}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #1877F2, #0D5FD9)',
              opacity: 0.6
            }}></div>
            
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(24, 119, 242, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
              border: '1px solid rgba(24, 119, 242, 0.2)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            
            <div style={{
              fontSize: '0.8rem',
              color: '#666',
              marginBottom: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: '500'
            }}>
              Facebook
            </div>
            <div style={{
              fontSize: '1.4rem',
              fontWeight: '300',
              color: '#fff',
              letterSpacing: '0.02em'
            }}>
              omaralwaridi
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div style={{
          textAlign: 'center',
          paddingTop: '3rem',
          borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#555',
            fontWeight: '300',
            letterSpacing: '0.05em'
          }}>
            Available Monday - Saturday, 9:00 AM - 8:00 PM (Beirut Time)
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;