import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/productcontext";
import PageNavigation from "./PageNavigation";
import MyImage from "../../pages/MyImage";
import FormatePrice from "../Layout/FormatePrice";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFindReplace, MdOutlineSecurity } from "react-icons/md";
import Star from "../../pages/Star";
import AddToCart from "../../pages/AddToCart";
import "../Style/SinglePage.css";

const API = "https://api.pujakaitem.com/api/products";

export const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  const { id } = useParams(); 
  const {
  id:alias ,
  name ,
  company,
  price,
  description,
  category,
  stock,
  stars,
  reviews,
  image,
  } = singleProduct;
// console.log(image);
  useEffect(() => {
     if(id) {  
      getSingleProduct(`${API}?id=${id}`);
     }
  }, []); 
  if (isSingleLoading) {
    return <div>Loading...</div>;
  }

  
  if (!singleProduct) {
    return <div>Product not found!</div>;
  }

  
  return (
   <>
     <PageNavigation title={name} />
     <section className="single-container"> 
     <div className="single grid grid-two-column"> 
     <div className="product-image"> 
      <MyImage image = {image}/>
     </div>
     <div className="product-data"> 
     <h2> {name}</h2>

     <Star stars={stars} reviews={reviews}/>
     <p className="product-data-price">
      MRP:
      <del>
        <FormatePrice price={price + 250000}/>
      </del>
     </p>
     <p className="product-data-price product-data-real-price"> 
      Deal of The Day : <FormatePrice price={price}/>
     </p>
     <p>{description}</p> 
     <div className="product-data-warranty"> 
      <div className="product-warranty-data">
      <TbTruckDelivery className="warranty-icon"/>
      <p>Free Delivery </p>
      </div>
      <div className="product-warranty-data">
      <MdFindReplace className="warranty-icon"/>
      <p>30 Days Replacement  </p>
      </div>
      <div className="product-warranty-data">
      <TbTruckDelivery className="warranty-icon"/>
      <p>Gehlot Delivery </p>
      </div>
      <div className="product-warranty-data">
      <MdOutlineSecurity className="warranty-icon"/>
      <p>2 Years Warranty  </p>
      </div>
     </div>
     
     <div className="product-data-info"> 
      <p>Available :
        <span>{stock > 0 ? "In Stock" : "Not Available "} </span>
      </p>
      <p>ID:
        <span>{id} </span>
      </p>
      <p>Brand:
        <span>{company} </span>
      </p>
     </div>
     <hr />
     {stock > 0 && <AddToCart product={singleProduct}/>}
     </div>
    
     </div>
     </section>
   </>
  );
};


