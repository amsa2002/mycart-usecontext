import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './css/ProductList.css';

function ProductList() {
  const { products } = useContext(ShopContext);

  return (  
    <div className='product-list'>
      <div className='card-group'>
        {products.map((product) => ( 
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="card h-100" style={{ width: '18rem' }}>
              <img src={product.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <span>{product.discountPercentage}% OFF </span>
                <span>${product.price}</span>
                <p>Ratings: {product.rating}</p>
                <p>Stocks: {product.stock}</p>
                <p>Category: {product.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
