import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../styles/productpage.module.css';
import { stripHtml } from 'string-strip-html';

const ProductPage = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [product, getProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://api.chec.io/v1/products/${id}`, {
        headers: {
          'X-Authorization': 'pk_34694a8f6cb2073db340e2319639ca0bee3c770a690d6',
        },
      });
      const products = await res.json();
      getProduct(products);
    };
    fetchProducts();
  }, [id]);
  // const meta = stripHtml(product.description);

  // const { description } = stripHtml(product.description);
  // console.log(description);
  return (
    <article key={product.id} className={styles.articleSection}>
      <img
        className={styles.productImage}
        src={product.image?.url}
        alt={product.name}
      />
      <h1>{product.name}</h1>
      {/* <p>{meta}</p> */}
      <br />
      <button onClick={() => navigate('/')}>Go back</button>
    </article>
  );
};

export default ProductPage;
