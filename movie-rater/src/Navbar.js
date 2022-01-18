import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p>Logo</p>
      <div>
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
      <div className="search">
        <input type="text" placeholder="Search"></input>
        <button>Search</button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;