import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Add.css';
import { Link } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [stars, setStars] = useState('');
  const [writers, setWriters] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [review, setReview] = useState('');
  const [ratings, setRatings] = useState({directing: 0, acting: 0, costumeDesign: 0, editing: 0, music: 0, visualEffects: 0, screenplay: 0});
  const handleChange = e => {
    const {name, value} = e.target;
    setRatings(prevState => ({
      ...prevState,[name]: value
    }))
  }
  
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { name, year, director, stars, writers, imgUrl, review, ratings };

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
            <label for="name">Title</label><br/>
            <input style={{width: "280px", height: "30px"}} type="text" 
            id="name"
            required
            value={name}
            placeholder="eg.: One Hundred and One Dalmatians"
            onChange={(e) => setName(e.target.value)}
            />

            <label for="director">Director</label><br/>
            <input style={{width: "280px", height: "30px"}} type="text" 
            id="director"
            required
            value={director}
            placeholder="eg.: Clyde Geronimi"
            onChange={(e) => setDirector(e.target.value)}
            />

            <label for="writers">Writers</label><br/>
            <input style={{width: "280px", height: "30px"}} type="text" 
            id="writers"
            required
            value={writers}
            placeholder="eg.: Bill Peet, Dodie Smith"
            onChange={(e) => setWriters(e.target.value)}
            />

          </div>
          <div className="blockDiv">
            <label for="year">Year</label><br/>
            <input style={{width: "280px", height: "30px"}} type="number" 
            id="year"
            required
            value={year}
            placeholder="eg.: 1961"
            onChange={(e) => setYear(e.target.value)}
            />

            <label for="stars">Stars</label><br/>
            <input style={{width: "280px", height: "30px"}} type="text" 
            id="stars"
            required
            value={stars}
            placeholder="eg.: Rod Taylor, Betty Lou Gerson, J. Pat O'Malley"
            onChange={(e) => setStars(e.target.value)}
            />

            <label for="imgUrl">Image URL</label><br/>
            <input style={{width: "280px", height: "30px"}} type="url" 
            id="imgUrl"
            required
            value={imgUrl}
            placeholder="eg.: https://thedisinsider.com/101-dalmatians.png"
            onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
        </div>

        <label for="review">Review</label><br/>
        <input style={{width: "600px", paddingTop: "40px", paddingBottom: "10px"}} type="text" 
        id="review"
        required
        value={review}
        placeholder="eg.: When a litter of Dalmatian puppies are abducted..."
        onChange={(e) => setReview(e.target.value)}
        />

        <div className="ratingsDiv">
          <label>Ratings</label><br/>
          <table>
            <tr>
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
            <tr>
              <th><label for="directing">Directing </label></th>
              <td><input type="radio" id="directing" name="directing" value={1} onChange={handleChange} required/></td>
              <td><input type="radio" id="directing" name="directing" value={2} onChange={handleChange}/></td>
              <td><input type="radio" id="directing" name="directing" value={3} onChange={handleChange}/></td>
              <td><input type="radio" id="directing" name="directing" value={4} onChange={handleChange}/></td>
              <td><input type="radio" id="directing" name="directing" value={5} onChange={handleChange}/></td>
            </tr>
            <tr>
              <th><label for="acting">Acting </label></th>
              <td><input type="radio" id="acting" name="acting" value={1} onChange={handleChange} required/></td>
              <td><input type="radio" id="acting" name="acting" value={2} onChange={handleChange}/></td>
              <td><input type="radio" id="acting" name="acting" value={3} onChange={handleChange}/></td>
              <td><input type="radio" id="acting" name="acting" value={4} onChange={handleChange}/></td>
              <td><input type="radio" id="acting" name="acting" value={5} onChange={handleChange}/></td>
            </tr>
            <tr>
              <th><label for="costumeDesign">Costume design </label></th>
              <td><input type="radio" id="costumeDesign" name="costumeDesign" value="1" onChange={handleChange} required/></td>
              <td><input type="radio" id="costumeDesign" name="costumeDesign" value="2" onChange={handleChange}/></td>
              <td><input type="radio" id="costumeDesign" name="costumeDesign" value="3" onChange={handleChange}/></td>
              <td><input type="radio" id="costumeDesign" name="costumeDesign" value="4" onChange={handleChange}/></td>
              <td><input type="radio" id="costumeDesign" name="costumeDesign" value="5" onChange={handleChange}/></td>
            </tr>
            <tr>
              <th><label for="editing">Editing </label></th>
              <td><input type="radio" id="editing" name="editing" value="1" onChange={handleChange} required/></td>
              <td><input type="radio" id="editing" name="editing" value="2" onChange={handleChange}/></td>
              <td><input type="radio" id="editing" name="editing" value="3" onChange={handleChange}/></td>
              <td><input type="radio" id="editing" name="editing" value="4" onChange={handleChange}/></td>
              <td><input type="radio" id="editing" name="editing" value="5" onChange={handleChange}/></td>
            </tr>
            <tr>
              <th><label for="music">Music </label></th>
              <td><input type="radio" id="music" name="music" value="1" onChange={handleChange} required/></td>
              <td><input type="radio" id="music" name="music" value="2" onChange={handleChange}/></td>
              <td><input type="radio" id="music" name="music" value="3" onChange={handleChange}/></td>
              <td><input type="radio" id="music" name="music" value="4" onChange={handleChange}/></td>
              <td><input type="radio" id="music" name="music" value="5" onChange={handleChange}/><br/></td>
            </tr>
            <tr>
              <th><label for="visualEffects">Visual effects </label></th>
              <td><input type="radio" id="visualEffects" name="visualEffects" value="1" onChange={handleChange} required/></td>
              <td><input type="radio" id="visualEffects" name="visualEffects" value="2" onChange={handleChange}/></td>
              <td><input type="radio" id="visualEffects" name="visualEffects" value="3" onChange={handleChange}/></td>
              <td><input type="radio" id="visualEffects" name="visualEffects" value="4" onChange={handleChange}/></td>
              <td><input type="radio" id="visualEffects" name="visualEffects" value="5" onChange={handleChange}/></td>
            </tr>
            <tr>
              <th><label for="screenplay">Screenplay </label> </th>
              <td><input type="radio" id="screenplay" name="screenplay" value="1" onChange={handleChange} required/></td>
              <td><input type="radio" id="screenplay" name="screenplay" value="2" onChange={handleChange}/></td>
              <td><input type="radio" id="screenplay" name="screenplay" value="3" onChange={handleChange}/></td>
              <td><input type="radio" id="screenplay" name="screenplay" value="4" onChange={handleChange}/></td>
              <td><input type="radio" id="screenplay" name="screenplay" value="5" onChange={handleChange}/></td>
            </tr>
          </table>
        </div>
        <div className="addReviewButtonsDiv">
          <Link to="/">Cancel</Link>
          { !isPending && <button>Add</button> }
          { isPending && <button>Adding...</button> }
        </div>
      </form>
    </div>
  )
}

export default Add;