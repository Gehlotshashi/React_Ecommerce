import { NavLink } from "react-router-dom";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "../Style/footer.css";

export const Footer = () => {
  return (
    <>
      <section className="footer-contact-short">
        <div className="footer-grid footer-grid-two-column">
          <h3>Ready to get started</h3>
          <h3>Talk to us today</h3>
        </div>
        <div>
          <button>
            <NavLink to="/contact">Get Started</NavLink>
          </button>
        </div>
      </section>
      <footer>
        <div className="footer-container footer-grid footer-grid-four-column">
          <div className="footer-footer-about">
            <h3>Gehlot Technical</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipiscing elit.</p>
          </div>
          <div className="footer-footer-subscribe">
            <h3>Subscribe for updates</h3>
            <form action="#">
              <input type="email" placeholder="your e-mail" />
              <input type="submit" value="subscribe" />
            </form>
          </div>
          <div className="footer-footer-social">
            <h3>follow us</h3>
            <div className="footer-footer-social--icons">
              <div>
                <IoLogoDiscord />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <a href="https://www.youtube.com/" target="_blank">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-footer-contact">
            <h3>Call Us</h3>
            <a href="tel:8955535863">8955535863</a>
          </div>
        </div>
        <hr />
        <div>
          <p>
            @{new Date().getFullYear()} Gehlot Technical. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};


























// <footer className="footer-section">
//     <div className="container grid grid-three-cols"> 
//     {
//         footerContact.map((curData,index)=>{

//             const {icon,title,details}=curData;
//             return(

//                 <div className="footer-contact" key={index}>
//                 <div className="icon">{footerIcon[icon]} </div>
//                 <div className="footer-contact-text">
//                 <p>{title}</p>
//                 <p>{details}</p>
//                 </div>
//                 </div>
//             );
//         })
//     }
//     </div>
//     <div className="copyright-area">
//         <div className="container">
//           <div className="grid grid-two-cols">
//             <div className="copyright-text">
//               <p>
//                 Copyright &copy; 2025, All Right Reserved
//                 <NavLink to="https://thapatechnical.shop/" target="_blank">
//                   Gehlot Center 
//                 </NavLink>
//               </p>
//             </div>

//             <div className="footer-menu">
//               <ul>
//                 <li>
//                   <NavLink to="/">Home</NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="https://www.instagram.com/divine_shashi37/"
//                     target="_blank"
//                   >
//                     Social
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="https://github.com/Gehlotshashi/Demo"
//                     target="_blank"
//                   >
//                     Source Code
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/contact">Contact</NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         </div>
//     </footer>