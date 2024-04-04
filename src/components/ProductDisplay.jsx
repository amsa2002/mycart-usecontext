import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './css/ProductDisplay.css'

function ProductDisplay() {
  const { id } = useParams();
  const { products, addToCart, removeFromCart, getTotalAmount } = useContext(ShopContext);

  // Find the product with the matching ID
  const product = products.find(product => product.id.toString() === id);

  // Check if the product is found
  if (!product) {
    return <div>Product not found!</div>;
  }

  // Product is found, render its details
  return (
    <div className='product-display'> 
      <div className="card mb-3" style={{width: "100%"}}>
        <div className="row g-0">
          <div className="col-md-4">
          <img src={product.thumbnail} className="cartpage" alt={product.title} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <span>{product.discountPercentage}% OFF </span>
              <span>${product.price}</span>
              <p>Ratings: {product.rating}</p>
              <p>Stocks: {product.stock}</p>
              <p>Category: {product.category}</p>
              <button className='primary-btn'onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
              <button className='remove' onClick={()=>{removeFromCart(product.id)}}>Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div className='cart-total'>
      <div className="cartitems-total">
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <h3>Total Amount</h3>
                  <h3>${getTotalAmount()}</h3>
                </div>
            </div>
           <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
