/** @format */


import useMovies from "../../../../hooks/useMovies";
import SectionTitle from "../../../../shared/sectionTitle/SectionTitle";
import MoviesCard from "../../../../shared/moviesCards/MoviesCard";

const LatestMovie = () => {
  const [movies] = useMovies();
  // console.log("movies", movies);
  const allMovies = movies?.movies;
  // console.log(allMovies);

  const sorts = allMovies?.sort((a, b) =>
    new Date(a.release_date) < new Date(b.release_date) ? 1 : -1
  );

  console.log(sorts);

  return (
    <div>
      <SectionTitle heading={"Latest Movies"}></SectionTitle>

      {/* LATEST CONTAINER GRID */}

      <div className="my-5">
        <div className='grid grid-cols-2 md:grid-cols-3 ' >
          {sorts?.map((latest) => (
            <>
              <MoviesCard
                image={latest?.poster}
                badge={
                  latest?.categories[0]?.links[0]?.title}

                release_date={latest?.release_date}
                ratings={latest?.ratings}
                name={latest?.title}
              ></MoviesCard>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestMovie;
