import { Link } from "react-router-dom";

const MovieList = ({movies}) => {
  return (
    <div>
      {movies.map((movie) => (
        <div className="MovieListCard" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img className="image" src={ movie.imgUrl } alt="moviePic"/>
            <div className="MovieListCardInfoDiv">
              <p>{ movie.name }</p>
              <div className="MovieListCardBottomDiv">
                <p>{ movie.year }</p>
                <p><i class="far fa-star"></i> { Math.floor((movie.ratings.directing + movie.ratings.acting + movie.ratings.costumeDesign + movie.ratings.editing + movie.ratings.music + movie.ratings.visualEffects + movie.ratings.screenplay)/7 )}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>

  )
}

export default MovieList;