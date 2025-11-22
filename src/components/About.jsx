import React from 'react';

function About() {
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

      {/* Gradient Overlays */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at top left, rgba(80,80,80,0.2), transparent 50%)'
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at bottom right, rgba(60,60,60,0.2), transparent 50%)'
      }}></div>

      <div style={{
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '6rem 4rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
          width: '100%'
        }}>
          
          {/* Left Side - Content */}
          <div>
            <div style={{
              fontSize: '0.9rem',
              letterSpacing: '0.3em',
              color: '#666',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              fontWeight: '500'
            }}>
              Our Story
            </div>
            
            <h1 style={{
              fontSize: '5rem',
              fontWeight: '200',
              marginBottom: '2rem',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}>
              About Us
            </h1>

            <div style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, #fff, transparent)',
              marginBottom: '3rem'
            }}></div>

            <div style={{ marginBottom: '3rem' }}>
              <p style={{
                fontSize: '1.5rem',
                fontWeight: '300',
                lineHeight: '1.8',
                marginBottom: '2rem',
                color: '#e0e0e0'
              }}>
                Welcome to <span style={{ fontWeight: '400', color: '#fff' }}>O-Rolex</span>, your premier destination for exceptional timepieces.
              </p>
              
              <p style={{
                fontSize: '1.1rem',
                fontWeight: '300',
                lineHeight: '1.9',
                color: '#999',
                marginBottom: '2rem'
              }}>
                We specialize in curating the finest selection of high-quality watches, each piece representing the pinnacle of craftsmanship and precision engineering.
              </p>
            </div>

            {/* Feature Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem'
            }}>
              
              <div style={{
                padding: '2rem',
                background: 'linear-gradient(145deg, rgba(20,20,20,0.6), rgba(10,10,10,0.6))',
                border: '1px solid rgba(255,255,255,0.05)',
                borderLeft: '3px solid rgba(255,255,255,0.3)',
                borderRadius: '2px',
                transition: 'all 0.3s',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderLeftColor = '#fff';
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderLeftColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '1rem'
                }}>⌚</div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '400',
                  marginBottom: '0.8rem',
                  letterSpacing: '0.02em'
                }}>
                  More Than Watches
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#888',
                  fontWeight: '300',
                  lineHeight: '1.7'
                }}>
                  We don't just sell watches. We offer timeless pieces that become part of your legacy.
                </p>
              </div>

              <div style={{
                padding: '2rem',
                background: 'linear-gradient(145deg, rgba(20,20,20,0.6), rgba(10,10,10,0.6))',
                border: '1px solid rgba(255,255,255,0.05)',
                borderLeft: '3px solid rgba(218,165,32,0.3)',
                borderRadius: '2px',
                transition: 'all 0.3s',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderLeftColor = '#DAA520';
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderLeftColor = 'rgba(218,165,32,0.3)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '1rem'
                }}>✨</div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '400',
                  marginBottom: '0.8rem',
                  letterSpacing: '0.02em',
                  color: '#DAA520'
                }}>
                  Golden Time
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#888',
                  fontWeight: '300',
                  lineHeight: '1.7'
                }}>
                  Every moment is precious. We help you capture it in style with watches that define excellence.
                </p>
              </div>

            </div>
          </div>

          {/* Right Side - Stats */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}>
            
            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem'
            }}>
              <div style={{
                padding: '3rem',
                background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.8))',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '2px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: '200',
                  marginBottom: '1rem',
                  color: '#DAA520'
                }}>100+</div>
                <div style={{
                  fontSize: '1rem',
                  color: '#888',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>Premium Timepieces</div>
              </div>

              <div style={{
                padding: '3rem',
                background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.8))',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '2px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: '200',
                  marginBottom: '1rem',
                  color: '#DAA520'
                }}>500+</div>
                <div style={{
                  fontSize: '1rem',
                  color: '#888',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>Happy Clients</div>
              </div>

              <div style={{
                padding: '3rem',
                background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.8))',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '2px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: '200',
                  marginBottom: '1rem',
                  color: '#DAA520'
                }}>5★</div>
                <div style={{
                  fontSize: '1rem',
                  color: '#888',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>Excellence Rating</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;