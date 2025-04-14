import React from 'react';
import {Product} from "./Product";

const GridView = ({products}) => {
  return (
    <div className='section'>
    <div className='conatiner grid grid-two-column '>
        {
          products.map((curElem, id)=>{
            return <Product key={curElem.id} {...curElem}/>
          })
        } 
        </div>      
 </div>
  )
}

export default GridView;
