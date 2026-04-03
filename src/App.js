import React, { useState } from "react";
import "./App.css";
import first from "./assets/first.jpg";
import second from "./assets/second.png";
import laptop from "./assets/laptop.png";
import mobile from "./assets/mobile.webp";
import tablet from "./assets/tablet.avif";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login Successful!\nUsername: ${formData.username}`);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Products = ({ isLoggedIn }) => {
  // const products = [
  //   { id: 1, name: "Laptop", price: "$1000", image: laptop },
  //   { id: 2, name: "Mobile Phone", price: "$500", image: mobile },
  //   { id: 3, name: "Tablet", price: "$300", image: tablet },
  // ];

  // Changed price to INR
  const products = [
    { id: "Laptop", name: "Laptop", price: "₹92,700", image: laptop },
    { id: "Mobile Phone", name: "Mobile Phone", price: "₹50,000", image: mobile },
    { id: "Tablet", name: "Tablet", price: "₹35,900", image: tablet },
  ];

  // const [count, setCount] = useState(0);

  const [cart, setCart] = useState({});

  return (
    <div className="product-list">
      <div className="product-header">
        <h2>Products</h2>
        <p style={{ color: "red" }}>
          <b>
            <i>Check out our amazing products!</i>
          </b>
        </p>
        <p>
          <i>
            <u>
              <b>Products List</b>
            </u>
          </i>
        </p>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <div className="product-info">
              <p>Name: {product.name}</p>
              <br />
              <p>Price: {product.price}</p>
              {/* <button onClick={() => setCount(count + 1)} disabled={!isLoggedIn}>Add to Cart</button>
              <button onClick={() => setCount(count > 0 ? count - 1 : 0)} disabled={!isLoggedIn}>Remove from Cart</button> */}

              <button onClick={() => setCart((prev) => ({...prev,[product.id]: (prev[product.id] || 0) + 1,}))}disabled={!isLoggedIn}>
                Add to Cart
              </button>

              <button onClick={() => setCart((prev) => ({...prev,[product.id]:prev[product.id] > 0 ? prev[product.id] - 1 : 0,}))}disabled={!isLoggedIn}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <p>
        <b>Items in the cart: {cart}</b>
      </p> */}

        <p>
          <b>Items in the cart: {Object.entries(cart).map(([id, qty]) => `${id}:${qty}`).join(", ")}</b>
        </p>

    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="body">
      <header className="header">
        <h1>ANAND ELECTRONICS WELCOMES YOU!!!</h1>
        <nav className="hrefs">
          <a href="https://kitristudio.com/">Home</a>
          <br />
          <a href="https://www.amazon.in/">About Products</a>
        </nav>
      </header>
      <br />
      <img src={first} alt="Anand Sales" className="first-image" />
      <img src={second} alt="Anand" className="second-image" />

      <div className="login">
        <section id="home">
          <h2>Please Login to proceed further</h2>
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </section>
      </div>
      <br />
      <div className="product-details">
        <section id="Products">
          <Products isLoggedIn={isLoggedIn} />
        </section>
      </div>

      <footer className="footer">
        <p>
          <b>
            <u>Please contact us by:</u>
            <p>Email: support.anandelectronics@gmail.com</p>
            <p>Phone: +91 7761251278 or +91 3527179390 </p>
          </b>
        </p>
        <p>
          <b>&copy; Anand Electronics Ltd 2005</b>
        </p>
        <h2 className="thankyou">Thank You!! Please visit again!</h2>
      </footer>
    </div>
  );
}

export default App;
