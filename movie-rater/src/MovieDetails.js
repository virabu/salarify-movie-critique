import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch('http://localhost:8000/movies/' + id);

  return (
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie && (
        <div>
          <h3>{ movie.name }</h3>
          <p></p>
        </div>
      )}
    </div>
  )
}

export default MovieDetails;