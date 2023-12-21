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
import useMovies from "../../../../hooks/useMovies";
import MoviesCard from "../../../../shared/moviesCards/MoviesCard";

const BanglaSub = () => {

  const [movies] = useMovies();

  const allMovies = movies?.movies;
console.log(allMovies)


  const banglaSub = allMovies?.filter((Bsub)=>Bsub?.languages[0].bSub ===true )

  console.log(banglaSub)



  return (
    <div className="relative ">
      <SectionTitle heading={"Bangla Subtitled"}></SectionTitle>

      {/* SWIPERS  */}
      <div className='my-5  border-b-2'>
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


  
   {
    banglaSub?.map((sub)=><>
    
    
    <SwiperSlide>
           
           <MoviesCard 
           
            image={sub?.poster}
            badge={sub?.languages[0].bSub? 'Bsub': ''}
            release_date={sub?.release_date}

           ></MoviesCard>
          </SwiperSlide>
    </>)
   }

      

     

        </Swiper>
      </div>
    </div>
  );
};

export default BanglaSub;
