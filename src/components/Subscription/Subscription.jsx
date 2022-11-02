import React from "react";
import "./Subscription.scss";
import { HiOutlineMail } from "react-icons/hi";
import images from "../../assets";

const Subscription = () => {
  return (
    <div className='container'>
      <div className='subscription'>
        <img src={images.subscriptionIcon} className='subscription-icon' />
        <h3 className='subscription__heading'>
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h3>
        <form className='subscription__form'>
          <span className='input__container'>
            <HiOutlineMail className='email__icon' />
            <input
              type='email'
              name=''
              id=''
              className='subscription__form__input'
              placeholder='Your email'
            />
          </span>
          <button className='subscription__form__button'>Subscribe</button>
        </form>
        <img src={images.decoratorPlus} className='decorator-plus' />
      </div>
    </div>
  );
};

export default Subscription;
