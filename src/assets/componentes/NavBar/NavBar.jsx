
import { GrCart } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'



const NavBar = (   ) => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   <NavLink to= '/'  href="#">Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/categoria/remeras"   href="#">Remeras</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/categoria/gorras"  href="#">Gorras</NavLink>
        </li>

     
      </ul>

      <Link to='/cart' >
    0<GrCart />
    </Link>
   
    </div>
  </div>
</nav>
 
    )
}

export default NavBar

