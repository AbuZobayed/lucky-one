import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import CardDetails from '../CardInfo/CardInfo';

const Item = () => {

  // state and fetch products
  const [products, setProducts] = useState([]);
  useEffect( () => {

    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))

  } , [])

  // btn state
  const [carts, setCarts] = useState([])

  const cartDetails = items => {
    let newCart = []
    if(!carts.includes(items)){
      if(carts.length < 4){
        newCart = [...carts, items]
      }
      else{
        alert('You cannot add more details')
        return;
      }
    }
    else{
      return;
    }
    setCarts(newCart)
  }

  const deleteItems = (items) => {
    let newCart = [...carts, items]
    newCart = []
    setCarts(newCart)
  }

  const onlyOneProduct = () => {
    
    const randomProduct = carts[Math.floor(Math.random() * carts.length)];
    setCarts([randomProduct])
  }


  return (
  
    <div className='row w-100 mt-5'>
    <div className='col-md-9 '>
    <div className='row g-3 row-cols-md-3'>
            {
               products.map(product => <Card key={product.id} carts={carts} cartDetails={cartDetails} product={product} ></Card>)
             }
   </div> 
    </div>

    <div className='col-md-3 rounded-1 bg-success p-2 text-dark bg-opacity-25 '> 
      <h5 className='text-center my-4'>Phone Info</h5>
        {
          carts.map(cart => <CardDetails key={cart.id}  image={cart.img} name={cart.name} ></CardDetails>)
        }

      <div className='d-block text-center'>
      <button onClick={onlyOneProduct} className='btn btn-dark text-white border-0'>Choose one Product</button>
      </div>
      <div className='d-block text-center'>
      <button onClick={deleteItems} className='btn btn-danger my-2 text-white border-0'>Delete Items</button>
      </div>

    </div>
</div>

  );
};

export default Item;