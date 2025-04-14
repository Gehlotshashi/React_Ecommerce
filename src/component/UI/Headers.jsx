import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { useCartContext } from "../../context/CartContext";
// import "../Style/Header.css";

export const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const {total_item} = useCartContext();

    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header>
            <div className="header-container">
                <div className="header-grid header-navbar-grid">
                    <div className="header-logo">
                        <NavLink to="/">
                            <h1>Gehlot E-commerce Store</h1>
                        </NavLink>
                    </div>
                    <nav className={showMenu ? "header-menu-mobile" : "header-menu-web"}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>

                            <li>
                                <NavLink to="/cart">
                                    <FaCartPlus />
                                    <span>{total_item}</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
