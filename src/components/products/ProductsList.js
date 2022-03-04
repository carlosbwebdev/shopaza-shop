import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import '../../styles/App.css';

const ProductsList = ({ products }) => {
  return (
    <div className="products" id="products">
      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <ProductItem key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
