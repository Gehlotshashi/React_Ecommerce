import { Herosection } from "../component/UI/Herosection";
import { useProductContext } from "../context/productcontext";

export const About= ()=>{

const {myName} = useProductContext();


    const data={
        name:"Gehlot E-commerce Store",
     }
    return (
      <>
       {myName}
       <Herosection myData={data}/> 
       </>
    )  
 };