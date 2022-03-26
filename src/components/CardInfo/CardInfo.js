import React from 'react';
import './CardInfo.css'

const CardInfo = ({image, name,}) => {

  return (
    <div>

        <div className='details'>
        <img src={image} alt="" />
        <p> {name} </p>
          
          
        </div>
    </div>
  );
};

export default CardInfo;

