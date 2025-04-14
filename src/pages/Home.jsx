import { Herosection } from "../component/UI/Herosection";
import { Services } from "../component/UI/Services";
import { Trusted } from "../component/UI/Trusted";
import FeatureProduct from "./FeatureProduct";
// import { About } from "./About";


export const Home = ()=>{
   const data={
      name:"Gehlot Store",
   }
   return (
   <>
   <Herosection myData={data}/>
   <FeatureProduct/>
   <Services/>
   <Trusted/>
   </>
   )  
};