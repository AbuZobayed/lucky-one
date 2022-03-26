import React from 'react';
import './Softwore.css'

const Softwore = (props) => {
    console.log(props);

    const {id,name,price,picture} = props.product;
    return (
        <div className='softwore'>
            <img src={picture} alt='images'></img>
        </div>
    );
};

export default Softwore;