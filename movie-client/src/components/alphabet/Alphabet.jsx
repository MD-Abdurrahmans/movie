/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import Containers from "../../shared/containers/Containers";

const Alphabet = () => {
    const [alphabet,setAlphabet]= useState(null)

     useEffect(()=>{
        axios.get("alphabet.json").then((res) =>setAlphabet(res?.data) );

     },[])

     console.log(alphabet)
  return <div>



     <Containers>
  
        <div className="border-b pb-4 overflow-x-auto">
        {
        alphabet?.map((alpha)=><>
        <span className=" p-4   text-grays cursor-pointer"  key={alpha.alphabet}>{alpha?.alphabet}</span>
        </>)
     }
        </div>

     </Containers>
  
  </div>;
};

export default Alphabet;
