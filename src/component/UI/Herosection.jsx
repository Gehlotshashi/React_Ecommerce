
import {NavLink} from "react-router-dom";
import "../Style/HeroSection.css";

export const Herosection=({myData})=>{
    const {name} = myData;
    return (
   <div className="container"> 
       <div className="grid grid-two-column"> 
         <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1> 
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias 
            atque temporibus veniam doloribus libero ad error amnis voluppptates
            animi ! suscipit sapiente . 
            </p>
            <NavLink>
            <button>Shop Now </button>
            </NavLink>
        </div>
       {/* our homepage image  */}
       <div className="hero-section-image"> 
       <figure>
        <img src="images/hero.jpg" 
        alt ="hero section photo "
        className="img-style"/>
       </figure>
       
       </div>
       </div>
    </div>

    )
}