import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useMovies = () => {

    const {data:movies} = useQuery({

        queryKey:['Movieses'],
        queryFn:async()=>{

            const res = await axios.get('movies.json')
            return res?.data;
        }
    })

    return  [movies]
};

export default useMovies;