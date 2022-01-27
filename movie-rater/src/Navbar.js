import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navDivLeft">
        <p>Logo</p>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
      </div>
      <div className="search">
        <input type="text" placeholder="Search">
          
        </input>
        <button>Search</button>
      </div>
    </nav>
  )
}

export default Navbar;