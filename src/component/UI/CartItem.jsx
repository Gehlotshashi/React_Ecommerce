import React from 'react'
import FormatePrice from "../Layout/FormatePrice";
import CartAmountToggle from '../../pages/CartAmountToggle';
import { MdDelete } from "react-icons/md";
import "../Style/CartItem.css";
import { useCartContext } from '../../context/CartContext';
const CartItem = ({id,name,image,color,price,amount}) => {

    const { removeItem ,setDecrease,setIncrease } = useCartContext();

  return (
    <div className='cart_heading grid grid-five-column'>
      <div className='cart-image--name'>
       <div> 
        <figure> 
            <img src={image} alt={id}/>
        </figure>
       </div> 
      <div>
       <p>{name}</p> 
       <div className='color-div'>
      <p>color: </p> 
      <div className='color-style'
      style={{backgroundColor:color,color:color}}
      > </div> 
     </div>
    </div> 

     </div>
     
     <div className='cart-hide'> 
        <p> <FormatePrice price={price}/></p>
     </div>
{/* quantity  */}
  <div className='cartItem-quantity'> 
    <CartAmountToggle amount ={amount} 
    setDecrease={()=>setDecrease(id)}
    setIncrease={()=>setIncrease(id)}/>
</div>
    {/* subtotal  */}
    <div className='cart-hide'>
    <p> <FormatePrice price ={price*amount }/></p> 
    </div> 

    <div> 
    <MdDelete  className='remove_icon' onClick={()=>removeItem(id)}/>
    </div>
    </div>
  )
}

export default CartItem;
