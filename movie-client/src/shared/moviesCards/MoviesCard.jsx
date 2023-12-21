/** @format */

import {RiMovie2Line} from "react-icons/ri";
import {FaStar} from "react-icons/fa6";
import { TbNoCreativeCommons } from "react-icons/tb";

const MoviesCard = ({image, badge, release_date, icon, ratings,name}) => {
  return (
    <div>
      <div className='card w-[200px] overflow-hidden   rounded-none shadow-xl '>
        <div className='relative'>
          <img src={image} className='h-[250px] border w-full ' alt='Shoes' />

          {/* badge */}

          <div className='absolute top-0 left-0'>
            <div className='bg-primary px-4'>{badge}</div>
          </div>
          <div className='absolute bottom-0  right-0'>
            <div className='bg-black bg-opacity-50  flex items-center'>
              {" "}
              <FaStar className='text-[#FBBF24] mr-2'   /> {ratings? ratings: 0}
            </div>
          </div>
        </div>

        <div className=''>
          <p className='flex  items-center  text-basic  '>
            {" "}
     
            {name}
          </p>
          <p className='flex  items-center  text-grays  '>
            {" "}
            {icon ? <RiMovie2Line className='mr-2 text-3xl' /> :'' }{" "}
            {release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
