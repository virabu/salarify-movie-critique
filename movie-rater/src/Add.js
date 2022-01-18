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
    const movie = { title, year, director, stars, writers, imageUrl, review, ratDirecting,  ratActing, ratCostume, ratEditing, ratMusic, ratVisual, ratScreenplay }

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
            <label>Title</label><br/>
            <input style={{width: "280px"}} type="text" 
            required
            value={title}
            placeholder="eg.: One Hundred and One Dalmatians"
            onChange={(e) => setTitle(e.target.value)}
            />

            <label>Director</label><br/>
            <input style={{width: "280px"}} type="text" 
            required
            value={director}
            placeholder="eg.: Clyde Geronimi"
            onChange={(e) => setTitle(e.target.value)}
            />

            <label>Writers</label><br/>
            <input style={{width: "280px"}} type="text" 
            required
            value={writers}
            placeholder="eg.: Bill Peet, Dodie Smith"
            onChange={(e) => setTitle(e.target.value)}
            />

          </div>
          <div className="blockDiv">
            <label>Year</label><br/>
            <input style={{width: "280px"}} type="number" 
            required
            value={year}
            placeholder="eg.: 1961"
            onChange={(e) => setTitle(e.target.value)}
            />

            <label>Stars</label><br/>
            <input style={{width: "280px"}} type="text" 
            required
            value={stars}
            placeholder="eg.: Rod Taylor, Betty Lou Gerson, J. Pat O'Malley"
            onChange={(e) => setTitle(e.target.value)}
            />

            <label>Image URL</label><br/>
            <input style={{width: "280px"}} type="url" 
            required
            value={imageUrl}
            placeholder="eg.: https://thedisinsider.com/101-dalmatians.png"
            onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <br/><label>Review</label><br/>
        <input style={{width: "600px", height: "60px"}} type="text" 
        required
        value={review}
        placeholder="eg.: When a litter of Dalmatian puppies are abducted..."
        onChange={(e) => setTitle(e.target.value)}
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