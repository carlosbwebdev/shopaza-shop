import React from 'react';
import { stripHtml } from 'string-strip-html';
import PropTypes from 'prop-types';
import styles from '../../styles/productitem.module.css';

const ProductItem = ({ product }) => {
  const { result } = stripHtml(product.description);

  return (
    <div className={styles.sectionCard}>
      <div className={styles.productCard}>
        <img
          className={styles.productImage}
          src={product.image?.url}
          alt={product.name}
        />
        <div className={styles.productInfo}>
          <h4 className={styles.productName}>{product.name}</h4>
          <p className={styles.productDescription}>
            {/* product description stripped of html tags */}
            {result.substring(0, 100)} <strong>...see More!</strong>
          </p>
          <div className={styles.productDetails}>
            <p className={styles.productPrice}>
              {product.price.formatted_with_symbol}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
