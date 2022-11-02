import React, { useEffect } from "react";
import images from "../../assets";
import "./Destinations.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Destinations = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className='container'>
      <div className='destinations'>
        <h2 className='secondary__heading'>
          <span className='secondary__heading--sub'>Top Selling</span>
          <span className='secondary__heading--main'>Top Destinations</span>
        </h2>

        <div className='destinations__cards'>
          <div className='destinations__cards__item' data-aos='zoom-in'>
            <img
              src={images.rome}
              alt='rome-image'
              className='destinations__cards__item__image'
            />
            <div className='destinations__cards__item__body'>
              <div className='destinations__cards__item__body__top'>
                <p>Rome, Italy</p>
                <p>$5.42k</p>
              </div>
              <div className='destinations__cards__item__body__bottom'>
                <img src={images.navigation} alt='' />
                <p>10 Days Trip</p>
              </div>
            </div>
          </div>

          <div className='destinations__cards__item' data-aos='zoom-in'>
            <img
              src={images.london}
              alt='rome-image'
              className='destinations__cards__item__image'
            />
            <div className='destinations__cards__item__body'>
              <div className='destinations__cards__item__body__top'>
                <p>London, UK</p>
                <p>$4.5k</p>
              </div>
              <div className='destinations__cards__item__body__bottom'>
                <img src={images.navigation} alt='' />
                <p>12 Days Trip</p>
              </div>
            </div>
          </div>

          <div className='destinations__cards__item' data-aos='zoom-in'>
            <img
              src={images.europe}
              alt='rome-image'
              className='destinations__cards__item__image'
            />
            <div className='destinations__cards__item__body'>
              <div className='destinations__cards__item__body__top'>
                <p>Full Europe</p>
                <p>$15k</p>
              </div>
              <div className='destinations__cards__item__body__bottom'>
                <img src={images.navigation} alt='' />
                <p>28 Days Trip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
