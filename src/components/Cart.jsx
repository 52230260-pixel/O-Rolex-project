import React, { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Function to parse price (remove '$' and convert to number)
  const parsePrice = (price) => parseInt(price.replace("$", "")) || 0;

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + parsePrice(item.price), 0);

  // Handle delete item
  const handleDelete = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle cash out (simulate checkout and clear cart)
  const handleCashOut = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Checkout successful! Total: $${total}. Cart cleared.`);
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: "1px solid #333",
          marginBottom: "2rem",
        }}
      >
        <div></div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "300",
            letterSpacing: "0.1em",
            fontStyle: "italic",
          }}
        >
          O- Rolex - Cart
        </div>
        <div></div>
      </header>

      {/* Cart Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "300",
            marginBottom: "2rem",
          }}
        >
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p style={{ fontSize: "1.2rem", color: "#999" }}>
            Your cart is empty.
          </p>
        ) : (
          <>
            {/* Cart Items */}
            <div style={{ marginBottom: "2rem" }}>
              {cart.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #333",
                    padding: "1.5rem 0",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "300",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.nameEn}
                    </h3>
                    <p
                      style={{
                        color: "#999",
                        fontSize: "1rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.desc}
                    </p>
                    <p
                      style={{
                        color: "#999",
                        fontSize: "0.9rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {item.fullDesc}
                    </p>
                  </div>
                  <div style={{ textAlign: "right", marginLeft: "2rem" }}>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "300",
                        marginBottom: "1rem",
                      }}
                    >
                      Price: {item.price}
                    </p>
                    <button
                      onClick={() => handleDelete(index)}
                      style={{
                        background: "#ff4444",
                        color: "#fff",
                        padding: "0.5rem 1rem",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "background 0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.background = "#cc3333")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.background = "#ff4444")
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div
              style={{
                borderTop: "1px solid #444",
                paddingTop: "2rem",
                marginBottom: "2rem",
                textAlign: "right",
              }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: "300" }}>
                Total: ${total}
              </h2>
            </div>

            {/* Cash Out Button */}
            <div style={{ textAlign: "center" }}>
              <button
                onClick={handleCashOut}
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
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#e0e0e0")
                }
                onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}
              >
                Cash Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
