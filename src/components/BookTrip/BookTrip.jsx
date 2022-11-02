import React, { useEffect } from "react";
import images from "../../assets";
import "./BookTrip.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const BookTrip = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className='container'>
      <div className='book-trip'>
        <div className='book-trip__left' data-aos='fade-right'>
          <h2 className='book-trip__left__heading'>
            <span className='book-trip__left__heading--sub'>Easy and Fast</span>
            <span className='book-trip__left__heading--main'>
              Book Your Next Trip In 3 Easy Steps
            </span>
          </h2>

          <div className='book-trip__left__cards'>
            <div className='book-trip__left__cards__item'>
              <img src={images.chooseDestination} alt='' />
              <span className='book-trip__left__cards__item__text'>
                <h6 className='book-trip__left__cards__item__text__heading'>
                  Choose Destination
                </h6>
                <p className='book-trip__left__cards__item__text__paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </span>
            </div>
            <div className='book-trip__left__cards__item'>
              <img src={images.makePayment} alt='' />
              <span className='book-trip__left__cards__item__text'>
                <h6 className='book-trip__left__cards__item__text__heading'>
                  Make Payment
                </h6>
                <p className='book-trip__left__cards__item__text__paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </span>
            </div>
            <div className='book-trip__left__cards__item'>
              <img src={images.reachAirport} alt='' />
              <span className='book-trip__left__cards__item__text'>
                <h6 className='book-trip__left__cards__item__text__heading'>
                  Reach Airport on Selected Date
                </h6>
                <p className='book-trip__left__cards__item__text__paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className='book-trip__right' data-aos='fade-left'>
          <img src={images.bookTour} alt='book-tour__image' />
        </div>
      </div>
    </div>
  );
};

export default BookTrip;
