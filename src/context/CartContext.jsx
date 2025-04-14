import { createContext ,useContext,useEffect,useReducer } from "react";
import reducer from "../reducer/CartReducer";
const CartContext = createContext();

const getLocalCartData = () => {
  const localCartData = localStorage.getItem("GehlotCart");

  if ( !localCartData) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};


const initialState={
    // cart :[],
    cart : getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:5000,

}

const CartProvider=({children})=>{

const [state,dispatch] = useReducer(reducer ,initialState);

 const addToCart = (id,color,amount,product)=>{
  dispatch({ type:"ADD_TO_CART", payload:{id,color,amount,product}})
 }
 const removeItem=(id)=>{
    dispatch({type:"REMOVE_ITEM", payload : id })
 }

  const clearCart=()=>{
   dispatch({type:"CLEAR_CART"});
  }
const setDecrease=(id)=>{
  dispatch({type:"SET_DECREMENT",payload:id});
}
const setIncrease=(id)=>{
  dispatch({type:"SET_INCREMENT",payload:id});
}

 // to add the data in localStorage  (get vs set )
useEffect(()=>{

  dispatch({type:"CART_TOTAL_ITEM"});
  dispatch({type:"CART_TOTAL_PRICE"});
localStorage.setItem("GehlotCart", JSON.stringify(state.cart));
},[state.cart]);




return <CartContext.Provider value={{...state,
      addToCart ,removeItem ,clearCart ,setDecrease,setIncrease}}>
    {children}
    </CartContext.Provider>
}

const useCartContext =()=>{
    return useContext(CartContext);
}
export {CartProvider ,useCartContext};