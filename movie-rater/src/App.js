import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';
import MovieDetails from './MovieDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="main">
          <Switch>
          
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/add">
              <Add />
            </Route>

            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
          </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
