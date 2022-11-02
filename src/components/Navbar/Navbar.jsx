import React, { useState } from "react";
import images from "../../assets";
import { HiBars3BottomRight } from "react-icons/hi2";
import "./Navbar.scss";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav className='navbar'>
      <a href='/'>
        <img className='navbar__logo' src={images.logo} alt='jadoo_logo' />
      </a>

      <button
        className='navbar__menu-button'
        onClick={() => setShowNavbar(!showNavbar)}>
        <HiBars3BottomRight />
      </button>

      <ul className={`navbar__menu ${showNavbar && "navbar__show-mobile-nav"}`}>
        <li className='navbar__item'>
          <a href='/' className='navbar__link'>
            Desitnations
          </a>
        </li>
        <li className='navbar__item'>
          <a href='/' className='navbar__link'>
            Hotels
          </a>
        </li>
        <li className='navbar__item'>
          <a href='/' className='navbar__link'>
            Flights
          </a>
        </li>
        <li className='navbar__item'>
          <a href='/' className='navbar__link'>
            Bookings
          </a>
        </li>
        <li className='navbar__item'>
          <a href='/' className='navbar__link'>
            Login
          </a>
        </li>
        <li className='navbar__item'>
          <button className='navbar__btn'>Sign Up</button>
        </li>
        <li className='navbar__item'>
          <select className='navbar__lang' name='lang' id='lang'>
            <option value='en'>EN</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
