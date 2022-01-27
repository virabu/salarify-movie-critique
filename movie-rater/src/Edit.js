import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import './Add.css';
import './Edit.css';
import useFetch from "./useFetch";
import React from "react";
import { Link } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch('http://localhost:8000/movies/' + id);

  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [stars, setStars] = useState('');
  const [writers, setWriters] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [review, setReview] = useState('');
  const [ratings, setRatings] = useState({directing: 0, acting: 0, costumeDesign: 0, editing: 0, music: 0, visualEffects: 0, screenplay: 0});

  useEffect(() => {
    getMovieDetails();
  }, [])

  function getMovieDetails() {
    fetch(`http://localhost:8000/movies/`+ id).then((result) => {
      result.json().then((movie) => {
        setName(movie.name);
        setYear(movie.year);
        setDirector(movie.director);
        setStars(movie.stars);
        setWriters(movie.writers);
        setImgUrl(movie.imgUrl);
        setReview(movie.review);
        setRatings(movie.ratings);

        const inputsDirecting = document.querySelectorAll("#directing");
        for(let i = 0; i < 5; i++) {
          if(inputsDirecting[i].value === movie.ratings.directing) {
            inputsDirecting[i].checked = true;
          }
        }

        const inputsActing = document.querySelectorAll("#acting");
        for(let i = 0; i < 5; i++) {
          if(inputsActing[i].value === movie.ratings.acting) {
            inputsActing[i].checked = true;
          }
        }

        const inputsCostumeDesign = document.querySelectorAll("#costumeDesign");
        for(let i = 0; i < 5; i++) {
          if(inputsCostumeDesign[i].value === movie.ratings.costumeDesign) {
            inputsCostumeDesign[i].checked = true;
          }
        }

        const inputsEditing = document.querySelectorAll("#editing");
        for(let i = 0; i < 5; i++) {
          if(inputsEditing[i].value === movie.ratings.editing) {
            inputsEditing[i].checked = true;
          }
        }

        const inputsMusic = document.querySelectorAll("#music");
        for(let i = 0; i < 5; i++) {
          if(inputsMusic[i].value === movie.ratings.music) {
            inputsMusic[i].checked = true;
          }
        }

        const inputsVisualEffects = document.querySelectorAll("#visualEffects");
        for(let i = 0; i < 5; i++) {
          if(inputsVisualEffects[i].value === movie.ratings.visualEffects) {
            inputsVisualEffects[i].checked = true;
          }
        }

        const inputsScreenplay = document.querySelectorAll("#screenplay");
        for(let i = 0; i < 5; i++) {
          if(inputsScreenplay[i].value === movie.ratings.screenplay) {
            inputsScreenplay[i].checked = true;
          }
        }
      })
    })
  }

  const handleChange = e => {
    const {name, value} = e.target;
    setRatings(prevState => ({
      ...prevState,[name]: value
    }))
  }
  
  const history = useHistory();
  // const handleClickCancel = () => {
  //   history.goBack();
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { name, year, director, stars, writers, imgUrl, review, ratings };

    fetch(`http://localhost:8000/movies/${id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then((result) => {
      result.json().then(() => {
        getMovieDetails()
      })
      alert(`Movie '${movie.name}' has been updated`);
      history.push(`/movies/${id}`);
    })
  }

  return (
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie && (
      <div className="newMovieDiv">
        <h3>Edit the review of <i>{movie.name}</i></h3>
        <form onSubmit={handleSubmit}>
          <div className="inlineDiv">
            <div className="blockDiv">
              <label for="name">Title</label><br/>
              <input style={{width: "280px", height: "30px"}} type="text" 
              id="name"
              required
              value={name}
              onChange={(e) => {setName(e.target.value)}} />
  
              <label for="director">Director</label><br/>
              <input style={{width: "280px", height: "30px"}} type="text" 
              id="director"
              required
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              />
  
              <label for="writers">Writers</label><br/>
              <input style={{width: "280px", height: "30px"}} type="text" 
              id="writers"
              required
              value={writers}
              onChange={(e) => setWriters(e.target.value)}
              />
  
            </div>
            <div className="blockDiv">
              <label for="year">Year</label><br/>
              <input style={{width: "280px", height: "30px"}} type="number" 
              id="year"
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
              />
  
              <label for="stars">Stars</label><br/>
              <input style={{width: "280px", height: "30px"}} type="text" 
              id="stars"
              required
              value={stars}
              onChange={(e) => setStars(e.target.value)}
              />
  
              <label for="imgUrl">Image URL</label><br/>
              <input style={{width: "280px", height: "30px"}} type="url" 
              id="imgUrl"
              required
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>
          </div>
  
          <label for="review">Review</label><br/>
          <input style={{width: "600px", paddingTop: "40px", paddingBottom: "10px"}} type="text" 
          id="review"
          required
          value={review}
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
                <th>current rating</th>
              </tr>
              <tr>
                <th><label for="directing">Directing </label></th>
                <td><input type="radio" id="directing" className="directing" name="directing" value={1} onChange={handleChange} /></td>
                <td><input type="radio" id="directing" className="directing" name="directing" value={2} onChange={handleChange}/></td>
                <td><input type="radio" id="directing" className="directing" name="directing" value={3} onChange={handleChange} required/></td>
                <td><input type="radio" id="directing" className="directing" name="directing" value={4} onChange={handleChange}/></td>
                <td><input type="radio" id="directing" className="directing" name="directing" value={5} onChange={handleChange}/></td>
                <td>{movie.ratings.directing}</td>
              </tr>
              <tr>
                <th><label for="acting">Acting </label></th>
                <td><input type="radio" id="acting" name="acting" value={1} onChange={handleChange}/></td>
                <td><input type="radio" id="acting" name="acting" value={2} onChange={handleChange}/></td>
                <td><input type="radio" id="acting" name="acting" value={3} onChange={handleChange} required/></td>
                <td><input type="radio" id="acting" name="acting" value={4} onChange={handleChange}/></td>
                <td><input type="radio" id="acting" name="acting" value={5} onChange={handleChange}/></td>
                <td>{movie.ratings.acting}</td>
              </tr>
              <tr>
                <th><label for="costumeDesign">Costume design </label></th>
                <td><input type="radio" id="costumeDesign" name="costumeDesign" value="1" onChange={handleChange}/></td>
                <td><input type="radio" id="costumeDesign" name="costumeDesign" value="2" onChange={handleChange}/></td>
                <td><input type="radio" id="costumeDesign" name="costumeDesign" value="3" onChange={handleChange} required/></td>
                <td><input type="radio" id="costumeDesign" name="costumeDesign" value="4" onChange={handleChange}/></td>
                <td><input type="radio" id="costumeDesign" name="costumeDesign" value="5" onChange={handleChange}/></td>
                <td>{movie.ratings.costumeDesign}</td>
              </tr>
              <tr>
                <th><label for="editing">Editing </label></th>
                <td><input type="radio" id="editing" name="editing" value="1" onChange={handleChange} /></td>
                <td><input type="radio" id="editing" name="editing" value="2" onChange={handleChange}/></td>
                <td><input type="radio" id="editing" name="editing" value="3" onChange={handleChange} required/></td>
                <td><input type="radio" id="editing" name="editing" value="4" onChange={handleChange}/></td>
                <td><input type="radio" id="editing" name="editing" value="5" onChange={handleChange}/></td>
                <td>{movie.ratings.editing}</td>
              </tr>
              <tr>
                <th><label for="music">Music </label></th>
                <td><input type="radio" id="music" name="music" value="1" onChange={handleChange} /></td>
                <td><input type="radio" id="music" name="music" value="2" onChange={handleChange}/></td>
                <td><input type="radio" id="music" name="music" value="3" onChange={handleChange} required/></td>
                <td><input type="radio" id="music" name="music" value="4" onChange={handleChange}/></td>
                <td><input type="radio" id="music" name="music" value="5" onChange={handleChange}/></td>
                <td>{movie.ratings.music}</td>
              </tr>
              <tr>
                <th><label for="visualEffects">Visual effects </label></th>
                <td><input type="radio" id="visualEffects" name="visualEffects" value="1" onChange={handleChange}/></td>
                <td><input type="radio" id="visualEffects" name="visualEffects" value="2" onChange={handleChange}/></td>
                <td><input type="radio" id="visualEffects" name="visualEffects" value="3" onChange={handleChange} required/></td>
                <td><input type="radio" id="visualEffects" name="visualEffects" value="4" onChange={handleChange}/></td>
                <td><input type="radio" id="visualEffects" name="visualEffects" value="5" onChange={handleChange}/></td>
                <td>{movie.ratings.visualEffects}</td>
              </tr>
              <tr>
                <th><label for="screenplay">Screenplay </label> </th>
                <td><input type="radio" id="screenplay" name="screenplay" value="1" onChange={handleChange}/></td>
                <td><input type="radio" id="screenplay" name="screenplay" value="2" onChange={handleChange}/></td>
                <td><input type="radio" id="screenplay" name="screenplay" value="3" onChange={handleChange} required/></td>
                <td><input type="radio" id="screenplay" name="screenplay" value="4" onChange={handleChange}/></td>
                <td><input type="radio" id="screenplay" name="screenplay" value="5" onChange={handleChange}/></td>
                <td>{movie.ratings.screenplay}</td>
              </tr>
            </table>
          </div>
          <div className="addReviewButtonsDiv">
            {/* <button onClick={handleClickCancel}>Cancel</button> */}
            <Link to="/">Cancel</Link>
            { !isPending && <button>Update</button> }
            { isPending && <button>Saving...</button> }
          </div>
        </form>
        </div>
      )}
    </div>
  )
}

export default Edit;