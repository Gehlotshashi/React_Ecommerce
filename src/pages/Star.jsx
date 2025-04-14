import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";

const Star = ({stars,reviews}) => {
 const ratingStar = Array.from({length:5},(elem,index)=>{
    let number = index+ 0.5 ;
    return (
        <span key={index}> 
         {
            stars >= index + 1
            ? <FaStar className='star-icon'/>
            :stars >= number 
            ? <FaStarHalfAlt className='star-icon'/>
            :<IoStarOutline className='star-icon'/>
         }
        </span>
    )
 })
  return (
    <div className='icon-style'>
      {ratingStar}
      <p>({reviews} custumer reviews )</p>
    </div>
  )
}

export default Star;
