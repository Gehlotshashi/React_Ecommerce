import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "../Style/Services.css";

export const Services = () =>{
    return(
    <>
    <div className="container"> 
    <div className="grid grid-three-column">
     <div className="services-1"> 
     <div>
     <TbTruckDelivery className="icon" />
     <h3> Super fast and free delivery</h3>
     </div>
     </div>
     <div className="service-2"> 
        <div className="service-column-2">
        <MdSecurity className="icon" />
         <h3> Non -Contact Shipping </h3>
         </div>
        <div className="service-column-2"> 
        <GiReceiveMoney  className="icon"/>
        <h3> Money-back Guaranteed </h3>
        </div>
     </div>

     <div className="service-3"> 
        <diV> 
        <RiSecurePaymentLine className="icon"/> 
        <h3> Super Secure Payment System </h3>
        </diV>
     </div>
    </div>
    </div>
    </>
    );
};