import React from "react";
import images from "../../assets";
import "./Partners.scss";

const Partners = () => {
  return (
    <div className='container'>
      <marquee behavior='' direction=''>
        <div className='partners'>
          <img className='partners__logo' src={images.axon} />
          <img className='partners__logo' src={images.jetStar} />
          <img className='partners__logo' src={images.expedia} />
          <img className='partners__logo' src={images.qantas} />
          <img className='partners__logo' src={images.aitalia} />
        </div>
      </marquee>
    </div>
  );
};

export default Partners;
