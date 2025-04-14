import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import Sort from "./Sort";
import "../component/Style/products.css";

export const Products = ()=>{

 
 return (
  <>
  <div className="container grid grid-filter-column">
  <div> 
    <FilterSection/>
    </div> 

    <section className="product-view--sort"> 
     <div className="sort-filter"> <Sort/> </div>

     <div className="main-products"> < ProductList/> </div>   
    </section>    
 </div>
  </> 
 ) 
 };