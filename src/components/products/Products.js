import React, { useState, useEffect } from 'react';
import commerce from '../../lib/commerce';
import ProductsList from './ProductsList';
import '../../styles/App.css';

const Products = (onAddToCart) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const fetchCart = () => {
      commerce.cart
        .retrieve()
        .then((cart) => {
          setCart(cart);
        })
        .catch((error) => {
          console.log('There was an error fetching the cart', error);
        });
    };
    fetchCart();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://api.chec.io/v1/products/', {
        headers: {
          'X-Authorization': 'pk_34694a8f6cb2073db340e2319639ca0bee3c770a690d6',
        },
      });
      const products = await res.json();

      setProducts(products.data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="products-list">
      <ProductsList products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Products;

// const fetchProducts = () => {
//   commerce.products
//     .list()
//     .then((products) => {
//       setProducts(products.data);
//     })
//     .catch((error) => {
//       console.log('There was an error fetching the products', error);
//     });
// };

// useEffect(() => {
//   fetchProducts();
// }, []);
