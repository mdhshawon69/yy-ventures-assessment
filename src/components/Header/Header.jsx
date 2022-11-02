import React, { useEffect } from "react";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import images from "../../assets";
import { BsFillPlayFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className='container'>
      <img className='container__image' src={images.headerRight} alt='' />
      <Navbar />
      <div className='header'>
        <div className='header__left' data-aos='fade-right'>
          <h1 className='heading'>
            <span className='heading__sub'>
              Best Destinations around the world
            </span>
            <span className='heading__main'>
              Travel,
              <span className='heading__sub--underlined'>
                enjoy <img src={images.underline} alt='underline-image' />
              </span>
              {""} {""}
              and live a new and full life
            </span>
          </h1>
          <p className='header__paragraph'>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className='header__CTA'>
            <button className='header__CTA-btn'>Find out more</button>
            <button className='header__CTA-btn-rounded'>
              <span className='rounded'>
                <BsFillPlayFill />
              </span>
              Play Demo
            </button>
          </div>
        </div>
        <div className='header__right' data-aos='fade-left'>
          <img
            src={images.headerImage}
            alt='header-image'
            className='header__image'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
