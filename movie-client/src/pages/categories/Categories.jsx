
import useMovies from "../../hooks/useMovies";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";

// TODO: MOVIES ARE NOT FETCH IN THIS PAGE ,OTHERS ALL OK 




const Categories = () => {
 
const [movies] = useMovies();
console.log(movies)


    return (
        <div>
              <SectionTitle heading={'Hindi Dubbed'} ></SectionTitle>

        </div>
    );
};

export default Categories;