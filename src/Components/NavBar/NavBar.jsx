import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const NavBar = (   ) => {

    return (


        <nav className="navbar navbar-expand-lg navMargin align-items-center ">
          
        
  <div className="container-fluid navMargin"> 
  
    
    <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon bg-danger border border-white  "></span> 
    </button> 
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">  <NavLink className={"navMargin cat cursive text-decoration-underline"} to= '/'  href="#">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={"navMargin cat cursive text-decoration-underline"} to="/category/remeras"   href="#">Remeras</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={"navMargin cat cursive text-decoration-underline"} to="/category/gorras"  href="#">Gorras</NavLink>
        </li>
      </ul>
</div>

     <NavLink  className={"fw-bold fs-1  text-danger cursive text-center title  "}to='/' href="#">Mi Tienda</NavLink>'
    
      <Link to='/cart' >
<CartWidget/>
    </Link>
   
    
  </div>
</nav>
 
    )
}

export default NavBar

