import useFetch from "./useFetch";
// import { useState, useEffect } from "react";
import MovieList from "./MovieList";


const Home = () => {
  const { data: movies, isPending, error } = useFetch('http://localhost:8000/movies');

  return (
    <div>
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div> }
      {movies && <MovieList movies={movies} />}
    </div>
  )
}

export default Home;