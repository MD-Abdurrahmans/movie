/** @format */

import Alphabet from "../../components/alphabet/Alphabet";
import Containers from "../../shared/containers/Containers";
import Banner from "./components/Banner/Banner";
import BanglaSub from "./components/banglaSub/BanglaSub";

const HomePage = () => {
  return (
    <div className='my-10'>
      <Alphabet></Alphabet>

      {/* grid  */}


 <Containers>
 <div className='grid grid-cols-1  md:grid-cols-12 my-10'>
        {/* left  */}
        <div className=' md:col-span-8 space-y-10  border min-h-screen'>

            {/* banner carousel */}
            <Banner></Banner>


            {/* bangla sub */}
            <BanglaSub></BanglaSub>
        </div>

        {/* Right  */}
        <div className='md:col-span-4 border min-h-screen'></div>


      </div>
 </Containers>
    </div>
  );
};

export default HomePage;
