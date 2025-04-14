import React from 'react';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import "../component/Style/CartAmountToggle.css";

const CartAmountToggle = ({amount , setDecrease , setIncrease}) => {
  return (
    <div className='cart-button'>
      <div className='amount-toggle'> 
      <button onClick={()=> setDecrease()}> <FaMinus /></button>
      <div className='amount-style'>{amount} </div>
      <button onClick={()=> setIncrease()}><FaPlus /> </button>
      </div>
    </div>
  )
}

export default CartAmountToggle;
