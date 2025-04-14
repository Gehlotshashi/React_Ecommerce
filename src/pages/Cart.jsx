import { useCartContext } from "../context/CartContext";
import "../component/Style/Cart.css";
import CartItem from "../component/UI/CartItem";
import { NavLink } from "react-router-dom";
import FormatePrice from "../component/Layout/FormatePrice";

export const Cart= ()=>{

    const {cart ,clearCart,total_amount,shipping_fee} = useCartContext();
     console.log(cart);
    return (
    <>
    <div className="cart-container">
    <div className="cart_heading grid grid-five-column"> 
     <p> Item </p>
     <p className="cart-hide"> Price</p>
     <p>Quantity </p>
     <p className="cart-hide"> Subtotal</p>
     <p> Remove  </p>
    </div>

   <div className="cart_item"> 
{
    cart.map((curElem)=>{
      return <CartItem key={curElem.id} {...curElem}/>
    })
}

   </div>

   <div className="cart-two-button">
    <NavLink to="/products"> 
      <button className="btn btn-shopping"> Continue Shopping</button>
    </NavLink>
    <button  className="btn btn-clear" onClick={clearCart}> Clear cart</button>
    </div> 

    <div className="order-total--amount"> 
  <div className="order-total--subdata">
    <div className="order-data-row">
      <p> SubTotal: </p> 
      <p><FormatePrice price={total_amount} /></p>
    </div>

    <div className="order-data-row">
      <p> Shipping Fee: </p>
      <p><FormatePrice price={shipping_fee} /></p>
    </div>

    <hr />

    <div className="order-data-row total">
      <p> Total Order: </p>
      <p><FormatePrice price={shipping_fee + total_amount} /></p>
    </div>
  </div>
</div>


   </div>
    </> 
    )  
 };