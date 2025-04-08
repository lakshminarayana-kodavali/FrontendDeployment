import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://springmysqldeployment-production.up.railway.app/product`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="app">
      <h1>📦 KLU Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Name:</strong> {product.name}</p>
          </div>
        ))}
      </div>
      <h1>This klu products list extracted from Railway.com Hosting Cloud DB.</h1>
    </div>
  );
}

export default App;
