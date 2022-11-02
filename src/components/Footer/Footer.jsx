import React from "react";
import images from "../../assets";
import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container'>
      <footer className='footer'>
        <div className='footer__items'>
          <div className='footer__items__first'>
            <img src={images.footerLogo} alt='' />
            <p className='footer__items__first__text'>
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div className='footer__items__second'>
            <h5 className='footer__menu__heading'>Company</h5>
            <a href='#' className='footer__menu__item'>
              About
            </a>
            <a href='#' className='footer__menu__item'>
              Careers
            </a>
            <a href='#' className='footer__menu__item'>
              Mobile
            </a>
          </div>
          <div className='footer__items__third'>
            <h5 className='footer__menu__heading'>Contact</h5>
            <a href='#' className='footer__menu__item'>
              Help/FAQ
            </a>
            <a href='#' className='footer__menu__item'>
              Press
            </a>
            <a href='#' className='footer__menu__item'>
              Affilates
            </a>
          </div>
          <div className='footer__items__fourth'>
            <h5 className='footer__menu__heading'>Airlinefees</h5>
            <a href='#' className='footer__menu__item'>
              Airline
            </a>
            <a href='#' className='footer__menu__item'>
              Low fare tips
            </a>
          </div>

          <div className='footer__social'>
            <div className='footer__social__top'>
              <a href='#'>
                <FaFacebookF className='footer__social__top__item' />
              </a>
              <a href='#'>
                <FaInstagram className='footer__social__top__item footer__social__top__item--bg' />
              </a>
              <a href='#'>
                <FaTwitter className='footer__social__top__item' />
              </a>
            </div>
            <div className='footer__social__bottom'>
              <h5 className='footer__social__bottom__heading'>
                Discover out app
              </h5>
              <a href='#'>
                <img src={images.playstore} alt='playstore-image' />
              </a>
              <a href='#'>
                <img src={images.appstore} alt='appstore-image' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
