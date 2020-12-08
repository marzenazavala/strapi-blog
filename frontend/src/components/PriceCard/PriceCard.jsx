import React from 'react';
import './priceCard.styles.css';

const PriceCard = ({title, content, price, details}) => {
  return (
    <div className='card-wrapper'>
      <div className='card'>
        <div className='card-title'>{title}</div>
        <div className='card-content'>{content}</div>
        <div className='details-border'/>
        <div className='card-details'>{details}</div>
        <div className='price-border'/>
        <div className='card-price'>{price}</div>
      </div>
    </div>
  );
};

export default PriceCard