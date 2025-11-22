import React, { useState } from "react";

const watches = [
  {
    id: 1,
    name: " SuRolexbmariner",
    nameEn: "Rolex Submariner",
    color: "Black",
    size: "42mm",
    material: "Steel",
    desc: " SuRolexbmariner ",
    fullDesc:
      "Made of Oystersteel (stainless steel) with a black Cerachrom ceramic bezel and a black dial featuring large luminous markers. The watch bezel is extremely durable and scratch-resistant",
    price: "10000$",
    image:
      "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1920/v1/catalogue/2025/upright-c/m126610ln-0001.jpg",
  },
  {
    id: 2,
    name: "Rolex Daytona",
    nameEn: "Rolex Daytona",
    color: "Black",
    size: "40mm",
    material: "Steel ",
    desc: "Rolex  Watch Daytona  ",
    fullDesc:
      "Designed to meet the needs of professional race drivers. Equipped with a highly precise chronograph and a tachymeter scale to measure average speed.",
    price: "12000$",
    image:
      "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1920/v1/catalogue/2025/upright-c/m126500ln-0001.jpg",
  },
  {
    id: 3,
    name: "Rolex GMT-Master II",
    nameEn: "Rolex GMT-Master II",
    color: "Blue-Red",
    size: "40mm",
    material: "Steel",
    desc: "GMT Watch master II",
    fullDesc:
      "Equipped with a GMT function that allows reading two time zones simultaneously. Its iconic two-tone bezel makes it a symbol of international travel.",
    price: "13000$",
    image:
      "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1920/v1/catalogue/2025/upright-c/m126710blro-0001.jpg",
  },
];

export default function RolexShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("");
  const [showCartMessage, setShowCartMessage] = useState(false);
  const currentWatch = watches[currentIndex];

  const handlePrevious = () => {
    if (isAnimating) return;
    setDirection("up");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : watches.length - 1));
      setIsAnimating(false);
      setDirection("");
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("down");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev < watches.length - 1 ? prev + 1 : 0));
      setIsAnimating(false);
      setDirection("");
    }, 500);
  };

  const getAnimationClass = () => {
    if (!direction) return "";
    if (isAnimating) {
      return direction === "up" ? "animate-slide-up" : "animate-slide-down";
    }
    return direction === "up"
      ? "animate-slide-in-from-top"
      : "animate-slide-in-from-bottom";
  };

  const handleAddToCart = () => {
    // Get existing cart from localStorage or initialize as empty array
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // Add current watch to cart
    cart.push(currentWatch);
    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    // Show message
    setShowCartMessage(true);
    setTimeout(() => {
      setShowCartMessage(false);
    }, 3000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        @keyframes slideDown {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
        @keyframes slideInFromTop {
          0% { transform: translateY(-100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInFromBottom {
          0% { transform: translateY(100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-slide-up { animation: slideUp 0.5s ease-out forwards; }
        .animate-slide-down { animation: slideDown 0.5s ease-out forwards; }
        .animate-slide-in-from-top { animation: slideInFromTop 0.5s ease-out forwards; }
        .animate-slide-in-from-bottom { animation: slideInFromBottom 0.5s ease-out forwards; }
        .cart-message { animation: fadeInOut 3s ease-in-out forwards; }
      `}</style>

      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: "1px solid #333",
        }}
      >
        <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem" }}></div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "300",
            letterSpacing: "0.1em",
            fontStyle: "italic",
          }}
        >
          O- Rolex
        </div>
        <div
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        ></div>
      </header>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "3rem 4rem",
          minHeight: "calc(100vh - 80px)",
          position: "relative",
        }}
      >
        {/* Page Title */}
        <div
          style={{
            position: "absolute",
            top: "3rem",
            right: "4rem",
            fontSize: "3.5rem",
            fontWeight: "300",
            direction: "rtl",
          }}
        >
          Watches
        </div>

        {/* Left Side - Watch Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginTop: "5rem",
          }}
        >
          {/* Navigation Arrows */}
          <div
            style={{
              position: "absolute",
              left: "6rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              zIndex: 10,
            }}
          >
            <button
              onClick={handlePrevious}
              disabled={isAnimating}
              style={{
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#333",
                border: "none",
                borderRadius: "4px",
                cursor: isAnimating ? "not-allowed" : "pointer",
                color: "#fff",
                fontSize: "1.2rem",
                opacity: isAnimating ? 0.5 : 1,
                transition: "background 0.3s",
              }}
              onMouseOver={(e) =>
                !isAnimating && (e.currentTarget.style.background = "#444")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#333")}
            >
              ▲
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              style={{
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#333",
                border: "none",
                borderRadius: "4px",
                cursor: isAnimating ? "not-allowed" : "pointer",
                color: "#fff",
                fontSize: "1.2rem",
                opacity: isAnimating ? 0.5 : 1,
                transition: "background 0.3s",
              }}
              onMouseOver={(e) =>
                !isAnimating && (e.currentTarget.style.background = "#444")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#333")}
            >
              ▼
            </button>
          </div>

          {/* Watch Image with Glow */}
          <div className={getAnimationClass()} style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle, rgba(100,100,100,0.3) 0%, transparent 70%)",
                filter: "blur(60px)",
                zIndex: 0,
              }}
            ></div>
            <img
              src={currentWatch.image}
              alt={currentWatch.name}
              style={{
                position: "relative",
                width: "400px",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 0 40px rgba(255,255,255,0.1))",
                zIndex: 1,
              }}
            />
          </div>
        </div>

        {/* Right Side - Watch Details */}
        <div
          className={getAnimationClass()}
          style={{
            flex: 1,
            maxWidth: "700px",
            paddingRight: "4rem",
            direction: "rtl",
            marginTop: "5rem",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "300",
              marginBottom: "0.5rem",
            }}
          >
            {currentWatch.color}
          </h2>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "300",
              marginBottom: "3rem",
              letterSpacing: "0.05em",
            }}
          >
            {currentWatch.nameEn}
          </h1>

          <div
            style={{
              borderTop: "1px solid #444",
              borderBottom: "1px solid #444",
              padding: "2rem 0",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.3rem",
                marginBottom: "1rem",
                fontWeight: "300",
              }}
            >
              {currentWatch.desc}
            </p>
            <p style={{ color: "#999", lineHeight: "1.8", fontSize: "1.1rem" }}>
              {currentWatch.fullDesc}
            </p>
          </div>

          {/* Specifications */}
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #333",
                paddingBottom: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ color: "#999", fontSize: "1.1rem" }}>Color :</span>
              <span style={{ fontSize: "1.2rem" }}>{currentWatch.color}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #333",
                paddingBottom: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ color: "#999", fontSize: "1.1rem" }}>size:</span>
              <span style={{ fontSize: "1.2rem" }}>{currentWatch.size}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #333",
                paddingBottom: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ color: "#999", fontSize: "1.1rem" }}>Metal:</span>
              <span style={{ fontSize: "1.2rem" }}>
                {currentWatch.material}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #333",
                paddingBottom: "1rem",
              }}
            >
              <span style={{ color: "#999", fontSize: "1.1rem" }}>price:</span>
              <span style={{ fontSize: "1.2rem" }}>{currentWatch.price}</span>
            </div>
          </div>

          {/* Purchase Button */}
          <button
            onClick={handleAddToCart}
            style={{
              background: "#fff",
              color: "#000",
              padding: "1rem 4rem",
              borderRadius: "50px",
              fontSize: "1.3rem",
              fontWeight: "300",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#e0e0e0")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}
          >
            Buy
          </button>
        </div>
      </div>

      {/* Cart Message Toast */}
      {showCartMessage && (
        <div
          className="cart-message"
          style={{
            position: "fixed",
            top: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#4CAF50",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            fontSize: "1.1rem",
            fontWeight: "300",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            zIndex: 1000,
          }}
        >
          ✓ Added to cart
        </div>
      )}
    </div>
  );
}
