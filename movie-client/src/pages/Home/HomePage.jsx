/** @format */

import Alphabet from "../../components/alphabet/Alphabet";
import Containers from "../../shared/containers/Containers";
import Banner from "./components/Banner/Banner";

const HomePage = () => {
  return (
    <div className='my-10'>
      <Alphabet></Alphabet>

      {/* grid  */}


 <Containers>
 <div className='grid md:grid-cols-12 my-10'>
        {/* left  */}
        <div className='md:col-span-8 border min-h-screen'>

            {/* banner carousel */}
            <Banner></Banner>
        </div>

        {/* Right  */}
        <div className='md:col-span-4 border min-h-screen'></div>


      </div>
 </Containers>
    </div>
  );
};

export default HomePage;
