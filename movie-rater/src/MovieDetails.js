import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch('http://localhost:8000/movies/' + id);

  return (
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie && (
        <div className="MovieDetails">
          <img className="MovieDetailsImage" src={ movie.imgUrl } alt="moviePic"/>
          <div className="MovieDetailsTitle">
            <h1>{ movie.name }</h1>
            <h2>{ movie.year }</h2>
          </div>
          <div className="MovieDetailsInfo">
            <p><strong>Director:</strong> { movie.director }</p>
            <p><strong>Stars:</strong> { movie.stars }</p>
            <p><strong>Writers:</strong> { movie.writers }</p>
            <p><strong>Review:</strong> { movie.review }</p>
            <div className="MovieDetailsRatingDiv">
              <div>
                <p><strong>Directing:</strong> { movie.ratings.directing }/5</p>
                <p><strong>Acting:</strong> { movie.ratings.acting }/5</p>
                <p><strong>Costume design:</strong> { movie.ratings.costumeDesign }/5</p>
                <p><strong>Editing:</strong> { movie.ratings.editing }/5</p>
                <p><strong>Music:</strong> { movie.ratings.music }/5</p>
                <p><strong>Visual effects:</strong> { movie.ratings.visualEffects }/5</p>
                <p><strong>Screenplay:</strong> { movie.ratings.screenplay }/5</p>
                </div>
              <div className="MovieDetailsOverallScoreCont">
                <h3>Overall score: </h3>
                <p>{ Math.floor((movie.ratings.directing + movie.ratings.acting + movie.ratings.costumeDesign + movie.ratings.editing + movie.ratings.music + movie.ratings.visualEffects + movie.ratings.screenplay)/7) }</p>
              </div>
            </div>
            <div className="MovieDetailsButtons">
              <span>Delete</span>
              <span>Edit</span>
              <Link style={{color: "#c0146c"}} to="/">Close</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetails;