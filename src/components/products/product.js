import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import commerce from '../../lib/commerce';

const Product = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [product, getProduct] = useState({});

  const setProduct = () => {
    commerce.products
      .list()
      .then((products) => {
        getProduct(products.data);
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error);
      });
  };

  useEffect(() => {
    setProduct();
  }, [id]);

  return (
    <article key={product.id} className="article-section">
      <img
        className="productImage"
        src={product.image?.url}
        alt={product.name}
      />
      <h1>{product.name}</h1>
      <br />
      <button onClick={() => navigate('/')}>Go back</button>
    </article>
  );
};

export default Product;
