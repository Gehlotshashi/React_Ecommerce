import { useProductContext } from "../context/productcontext";
import { Product } from "./Product";
import "../component/Style/FeatureProduct.css";


 
const FeatureProduct = () => {

    const {isLoading ,featureProducts} =useProductContext();
    // console.log(featureProduct);
 if(isLoading){
    return <div> .........Loading </div> 
 }
  return (
    <>
      <div className="section"> 
        <div className="container"> 
         <div className="intro-data">Check Now ! </div> 
         <div className="common-heading">Our Feature Services </div>
        <div className="grid grid-three-column">
          {
            featureProducts.map((curElem)=>{
            return <Product key={curElem.id} {...curElem}/>
            })
          }     
        </div> 
        </div> 
      </div>
    </>
  )
}

export default FeatureProduct;
