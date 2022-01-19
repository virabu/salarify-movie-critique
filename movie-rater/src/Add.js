import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Add.css';
import { Link } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [stars, setStars] = useState('');
  const [writers, setWriters] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [review, setReview] = useState('');
  const [ratDirecting, setRatDirecting] = useState('');
  const [ratActing, setRatActing] = useState('');
  const [ratCostume, setRatCostume] = useState('');
  const [ratEditing, setRatEditing] = useState('');
  const [ratMusic, setRatMusic] = useState('');
  const [ratVisual, setRatVisual] = useState('');
  const [ratScreenplay, setRatScreenplay] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { title, year, director, stars, writers, imageUrl, review, ratDirecting,  ratActing, ratCostume, ratEditing, ratMusic, ratVisual, ratScreenplay };

    setIsPending(true);

    fetch('http://localhost:8000/movies', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then(() => {
      console.log('new movie added');
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="newMovieDiv">
      <h3>Add a new review</h3>
      <form onSubmit={handleSubmit}>
        <div className="inlineDiv">
          <div className="blockDiv">
            <label for="title">Title</label><br/>
            <input style={{width: "280px"}} type="text" 
            id="title"
            required
            value={title}
            placeholder="eg.: One Hundred and One Dalmatians"
            onChange={(e) => setTitle(e.target.value)}
            />

            <label for="director">Director</label><br/>
            <input style={{width: "280px"}} type="text" 
            id="director"
            required
            value={director}
            placeholder="eg.: Clyde Geronimi"
            onChange={(e) => setDirector(e.target.value)}
            />

            <label for="writers">Writers</label><br/>
            <input style={{width: "280px"}} type="text" 
            id="writers"
            required
            value={writers}
            placeholder="eg.: Bill Peet, Dodie Smith"
            onChange={(e) => setWriters(e.target.value)}
            />

          </div>
          <div className="blockDiv">
            <label for="year">Year</label><br/>
            <input style={{width: "280px"}} type="number" 
            id="year"
            required
            value={year}
            placeholder="eg.: 1961"
            onChange={(e) => setYear(e.target.value)}
            />

            <label for="stars">Stars</label><br/>
            <input style={{width: "280px"}} type="text" 
            id="stars"
            required
            value={stars}
            placeholder="eg.: Rod Taylor, Betty Lou Gerson, J. Pat O'Malley"
            onChange={(e) => setStars(e.target.value)}
            />

            <label for="imageUrl">Image URL</label><br/>
            <input style={{width: "280px"}} type="url" 
            id="imageUrl"
            required
            value={imageUrl}
            placeholder="eg.: https://thedisinsider.com/101-dalmatians.png"
            onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
        </div>

        <br/><label for="review">Review</label><br/>
        <input style={{width: "600px", height: "60px"}} type="text" 
        id="review"
        required
        value={review}
        placeholder="eg.: When a litter of Dalmatian puppies are abducted..."
        onChange={(e) => setReview(e.target.value)}
        />

        <div className="ratingsDiv">
          <label>Ratings</label><br/>

          <label>Directing</label>
          <label>Acting</label>
          <label>Costume design</label>
          <label>Editing</label>
          <label>Music</label>
          <label>Visual effects</label>
          <label>Screenplay</label>
        </div>
        <div className="addReviewButtonsDiv">
          <Link to="/">Cancel</Link>
          <span>Add</span>
        </div>
      </form>
    </div>
    
  )
}

export default Add;