import { Link } from "react-router-dom";

const MovieList = ({movies, name}) => {
  return (
    <div>
      <h2>{ name }</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <h2>{ movie.name }</h2>
            <p>{ movie.year }</p>
          </Link>
        </div>
      ))}
    </div>

  )
}

export default MovieList;