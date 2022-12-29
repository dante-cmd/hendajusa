'use client'

import { carousel } from "../constants";
import { Pagination , Navigation} from "swiper";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
    


    return (
        <>
        <Swiper
          slidesPerView={4}
          spaceBetween={6}
          slidesPerGroup={3}
          pagination={{
            clickable: true,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          key="swiper-key-id"
        >
        
        
        {carousel.map((el) => (
            <SwiperSlide key={el.id}>
                <div className='card' key={el.id + 'div'}>
                    <img src={el.pic} className="pic" alt={el.title} key={el.id + 'pic'} />
                    <p className='desc' key={el.id + 'desc'}>{el.desc}</p>
                    <p className='title' key={el.id + 'title'}>{el.title}</p>
                    <div className='container_btn' key={el.id + "btn-div"}>
                        <button className='btn__green' key={el.id + 'btn'}
                        onClick={() => (window.open(`https://api.whatsapp.com/send?phone=946250150&text=${el.desc}`))}
                        >Pedir por WhatsApp
                        </button>
                    </div>
                </div>
                
            </SwiperSlide>
        ))}

        </Swiper>
      </>
    )
}

export default Carousel