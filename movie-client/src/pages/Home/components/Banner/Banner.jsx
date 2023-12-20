// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    return (
        <div className=''>
   <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
          
        }}
        navigation={{
            prevEl: null,
            nextEl: null,
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper    max-h-[300px] object-cover"
      >
        <SwiperSlide >
            <div className=''>
            <img src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D"  
             className='w-full ' alt="" />
            </div>
        </SwiperSlide>



        <SwiperSlide >
            <div className=''>
            <img src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D"  
             className='w-full ' alt="" />
            </div>
        </SwiperSlide>


    
      </Swiper>
        </div>
    );
};

export default Banner;