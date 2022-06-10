import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import {Link} from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageSwiper = ({imgs}) => {
    const divStyle = (src) => ({
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%),url(' + src + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '75% 27%',
        height: "500px"
    })

    return (
      <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ dynamicBullets: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {imgs.map( (img, i) => (
            <SwiperSlide key={i}>
              <div style={divStyle(img.ImageUrl)}>
                <div className='swiperContent'>
                  <p>Lorem ipsum dolor</p>
                  <span>Suspendisse potenti. Praesent eleifend tempor.<br/><br/></span>
                  <div>
                   <Link to="/contact-us">
                      <button className='contact'>
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
      </>
    )
  };
  
export default ImageSwiper;