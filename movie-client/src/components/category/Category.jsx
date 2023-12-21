/** @format */

import {useParams} from "react-router-dom";
import useMovies from "../../hooks/useMovies";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import Containers from "../../shared/containers/Containers";
import MoviesCard from "../../shared/moviesCards/MoviesCard";

const Category = () => {
  const [movies] = useMovies();
  const {name} = useParams();
  console.log(name);
  // console.log(movies)
  const allMovies = movies?.movies;
  console.log(allMovies);

  const catData = allMovies?.filter((movie) => movie.genre.name === name);

  console.log(catData);

  return (
    <div>
      <Containers>
        <SectionTitle heading={name}></SectionTitle>

        <div className='grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
          {catData?.map((movie) => (
            <>
              <MoviesCard
                image={movie?.poster}
                badge={movie?.categories[0]?.links[0]?.title}
                release_date={movie?.release_date}
                ratings={movie?.ratings}
                name={movie?.title}
              ></MoviesCard>
            </>
          ))}
        </div>
      </Containers>
    </div>
  );
};

export default Category;
