import React, { useEffect } from "react";
import images from "../../assets";
import "./Services.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });
  return (
    <div className='container'>
      <img src={images.decoratorPlus} alt='' className='container-decorator' />
      <div className='services'>
        <h2 className='secondary__heading'>
          <span className='secondary__heading--sub'>Category</span>
          <span className='secondary__heading--main'>
            We Offer Best Services
          </span>
        </h2>
        <div className='services__cards'>
          <div className='services__cards__item' data-aos='flip-left'>
            <img src={images.weather} alt='card-image' />
            <h4 className='services__cards__item__heading'>
              Calculated Weather
            </h4>
            <p className='services__cards__item__paragraph'>
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
          <div className='services__cards__item' data-aos='flip-right'>
            <img src={images.flights} alt='card-image' />
            <h4 className='services__cards__item__heading'>Best Flights</h4>
            <p className='services__cards__item__paragraph'>
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>
          <div className='services__cards__item' data-aos='flip-left'>
            <img src={images.localEvents} alt='card-image' />
            <h4 className='services__cards__item__heading'>Local Events</h4>
            <p className='services__cards__item__paragraph'>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </div>
          <div className='services__cards__item' data-aos='flip-right'>
            <img src={images.customize} alt='card-image' />
            <h4 className='services__cards__item__heading'>Customization</h4>
            <p className='services__cards__item__paragraph'>
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
