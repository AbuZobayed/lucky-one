import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
import React from 'react';

const Card = (props) => {
  const {cartDetails, product} = props
  const {img, name, price} = product
  return (
<div className='cart-details'>
<div className="card  shadow">
    <img className=' cart' src={img} alt="" />
    <div className="card-body text-center">
      <p><span className='fw-bold '>Name:</span> {name}</p>
      <p><span className='fw-bold'>Price:</span> ${price}</p>
      
    </div>
  <div className='d-flex justify-content-center'>
  <button onClick={ () => cartDetails(product) } 
  className='btn btn-dark btn-outline-success border-0 text-white btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> </button>
  </div>
  </div>
</div>
  );
};

export default Card;