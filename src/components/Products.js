import React, { useState } from 'react'
import { useEffect } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {
    const [products,setProducts]= useState([]);
    
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchProducts = async ()=>{
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await res.json();
        console.log(data);
        setProducts(data);
      }
      fetchProducts();
    }, [])
  
  const handleAdd=(product)=>{
      dispatch(add(product));
  }  

  return (
    <div className='productsWrapper'>
        {
            products.map((product)=>(
                <div className='card' key={product.id}>
                    <img src={product.images[0]} alt=''/>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>handleAdd(product)} className='btn'>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products