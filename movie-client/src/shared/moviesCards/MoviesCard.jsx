
import {RiMovie2Line} from "react-icons/ri";
import { FaStar } from "react-icons/fa6";


const MoviesCard = ({image,badge,release_date,icon,ratings}) => {
    return (
        <div>
             <div className='card overflow-hidden   rounded-none shadow-xl '>
    
     <div className="relative">
                 
     <img
               src={image}
               className='h-[250px] border  '
               alt='Shoes'
             />
         

    {/* badge */}

     <div className="absolute top-0 left-0">
     <div className="bg-primary px-4">{badge}</div>
     </div>
     <div className="absolute bottom-0  right-5">
     <div className="bg-black bg-opacity-50 px-4 flex items-center"> <FaStar className="text-[#FBBF24]"/> {ratings}</div>
     </div>
   
     </div>

           <div className=''>
             <p className='flex items-center font-semibold py-4'>
               {" "}
              {icon? '' :  <RiMovie2Line className='mr-2 text-3xl' />}  {release_date}
             </p>
           </div>


         </div>
        </div>
    );
};

export default MoviesCard;