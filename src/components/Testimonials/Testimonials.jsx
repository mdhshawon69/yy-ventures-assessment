import React, { useEffect } from "react";
import "./Testimonials.scss";
import TestimonialSlider from "./TestimonialSlider";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className='container'>
      <div className='testimonials'>
        <div className='testimonials__left' data-aos='fade-right'>
          <h2 className='testimonials__left__heading'>
            <span className='testimonials__left__heading--sub'>
              TESTIMONIALS
            </span>
            <span className='testimonials__left__heading--main'>
              What People Say About Us
            </span>
          </h2>
        </div>
        <div className='testimonials__right' data-aos='fade-left'>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
