import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./TestimonialSlider.scss";
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import images from "../../assets";

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'>
        <SwiperSlide>
          <div className='testimonial-card'>
            <img
              src={images.avater}
              alt=''
              className='testimonial-card__avater'
            />
            <p className='tesimonial-card__paragraph'>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className='testimonial-card__author'>
              <p className='testimonial-card__author__name'>
                <i>Chris Thomas</i>
              </p>
              <p className='testimonial-card__author__country'>
                <i>Lahore, Pakistan</i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonial-card'>
            <img
              src={images.avater}
              alt=''
              className='testimonial-card__avater'
            />
            <p className='tesimonial-card__paragraph'>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className='testimonial-card__author'>
              <p className='testimonial-card__author__name'>Chris Thomas</p>
              <p className='testimonial-card__author__country'>
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonial-card'>
            <img
              src={images.avater}
              alt=''
              className='testimonial-card__avater'
            />
            <p className='tesimonial-card__paragraph'>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className='testimonial-card__author'>
              <p className='testimonial-card__author__name'>Chris Thomas</p>
              <p className='testimonial-card__author__country'>
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonial-card'>
            <img
              src={images.avater}
              alt=''
              className='testimonial-card__avater'
            />
            <p className='tesimonial-card__paragraph'>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className='testimonial-card__author'>
              <p className='testimonial-card__author__name'>Chris Thomas</p>
              <p className='testimonial-card__author__country'>
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonial-card'>
            <img
              src={images.avater}
              alt=''
              className='testimonial-card__avater'
            />
            <p className='tesimonial-card__paragraph'>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className='testimonial-card__author'>
              <p className='testimonial-card__author__name'>Chris Thomas</p>
              <p className='testimonial-card__author__country'>
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonial-card'>
            <img
              src={images.avater}
              alt=''
              className='testimonial-card__avater'
            />
            <p className='tesimonial-card__paragraph'>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className='testimonial-card__author'>
              <p className='testimonial-card__author__name'>Chris Thomas</p>
              <p className='testimonial-card__author__country'>
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonial-card'>
            <img
              src={images.avater}
              alt=''
              className='testimonial-card__avater'
            />
            <p className='tesimonial-card__paragraph'>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className='testimonial-card__author'>
              <p className='testimonial-card__author__name'>Chris Thomas</p>
              <p className='testimonial-card__author__country'>
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonial-card'>
            <img
              src={images.avater}
              alt=''
              className='testimonial-card__avater'
            />
            <p className='tesimonial-card__paragraph'>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className='testimonial-card__author'>
              <p className='testimonial-card__author__name'>Chris Thomas</p>
              <p className='testimonial-card__author__country'>
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonial-card'>
            <img
              src={images.avater}
              alt=''
              className='testimonial-card__avater'
            />
            <p className='tesimonial-card__paragraph'>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>

            <div className='testimonial-card__author'>
              <p className='testimonial-card__author__name'>Chris Thomas</p>
              <p className='testimonial-card__author__country'>
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
