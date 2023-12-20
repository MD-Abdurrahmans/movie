/** @format */

import SectionTitle from "../../../../shared/sectionTitle/SectionTitle";
import {RiMovie2Line} from "react-icons/ri";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation} from "swiper/modules";

const BanglaSub = () => {
  return (
    <div className="relative ">
      <SectionTitle heading={"Bangla Subtitled"}></SectionTitle>

      {/* SWIPERS  */}
      <div className='my-5 '>
        <Swiper

        breakpoints={{
            468:{
                slidesPerView:2,
            },
            869:{
                slidesPerView:3
            },
            1280:{
                slidesPerView:4
            }
        }}
        //   slidesPerView={2}
          spaceBetween={30}
          centeredSlides={true}
          pagination={false}
          navigation={false}
          modules={[Navigation]}
          className='mySwiper '
        >


          <SwiperSlide>
            <div className='card overflow-hidden border  rounded-none shadow-xl '>
             
                <img
                  src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                  className='h-[250px] border relative'
                  alt='Shoes'
                />
            

       {/* badge */}

        <div className="absolute top-0 left-0">
        <div className="bg-primary px-4">Sub</div>
        </div>

              <div className=''>
                <p className='flex items-center font-semibold py-4'>
                  {" "}
                  <RiMovie2Line className='mr-2 text-3xl' /> This Movies ,2023
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='card overflow-hidden border  rounded-none shadow-xl '>
             
                <img
                  src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                  className='h-[250px] border relative'
                  alt='Shoes'
                />
            

       {/* badge */}

        <div className="absolute top-0 left-0">
        <div className="bg-primary px-4">Sub</div>
        </div>

              <div className=''>
                <p className='flex items-center font-semibold py-4'>
                  {" "}
                  <RiMovie2Line className='mr-2 text-3xl' /> This Movies ,2023
                </p>
              </div>
            </div>
          </SwiperSlide>



          <SwiperSlide>
            <div className='card overflow-hidden border  rounded-none shadow-xl '>
             
                <img
                  src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                  className='h-[250px] border relative'
                  alt='Shoes'
                />
            

       {/* badge */}

        <div className="absolute top-0 left-0">
        <div className="bg-primary px-4">Sub</div>
        </div>

              <div className=''>
                <p className='flex items-center font-semibold py-4'>
                  {" "}
                  <RiMovie2Line className='mr-2 text-3xl' /> This Movies ,2023
                </p>
              </div>
            </div>
          </SwiperSlide>





          <SwiperSlide>
            <div className='card overflow-hidden border  rounded-none shadow-xl '>
             
                <img
                  src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                  className='h-[250px] border relative'
                  alt='Shoes'
                />
            

       {/* badge */}

        <div className="absolute top-0 left-0">
        <div className="bg-primary px-4">Sub</div>
        </div>

              <div className=''>
                <p className='flex items-center font-semibold py-4'>
                  {" "}
                  <RiMovie2Line className='mr-2 text-3xl' /> This Movies ,2023
                </p>
              </div>
            </div>
          </SwiperSlide>





          <SwiperSlide>
            <div className='card overflow-hidden border  rounded-none shadow-xl '>
             
                <img
                  src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                  className='h-[250px] border relative'
                  alt='Shoes'
                />
            

       {/* badge */}

        <div className="absolute top-0 left-0">
        <div className="bg-primary px-4">Sub</div>
        </div>

              <div className=''>
                <p className='flex items-center font-semibold py-4'>
                  {" "}
                  <RiMovie2Line className='mr-2 text-3xl' /> This Movies ,2023
                </p>
              </div>
            </div>
          </SwiperSlide>




          <SwiperSlide>
            <div className='card overflow-hidden border  rounded-none shadow-xl '>
             
                <img
                  src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                  className='h-[250px] border relative'
                  alt='Shoes'
                />
            

       {/* badge */}

        <div className="absolute top-0 left-0">
        <div className="bg-primary px-4">Sub</div>
        </div>

              <div className=''>
                <p className='flex items-center font-semibold py-4'>
                  {" "}
                  <RiMovie2Line className='mr-2 text-3xl' /> This Movies ,2023
                </p>
              </div>
            </div>
          </SwiperSlide>




          <SwiperSlide>
            <div className='card overflow-hidden border  rounded-none shadow-xl '>
             
                <img
                  src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                  className='h-[250px] border relative'
                  alt='Shoes'
                />
            

       {/* badge */}

        <div className="absolute top-0 left-0">
        <div className="bg-primary px-4">Sub</div>
        </div>

              <div className=''>
                <p className='flex items-center font-semibold py-4'>
                  {" "}
                  <RiMovie2Line className='mr-2 text-3xl' /> This Movies ,2023
                </p>
              </div>
            </div>
          </SwiperSlide>




     

        </Swiper>
      </div>
    </div>
  );
};

export default BanglaSub;
