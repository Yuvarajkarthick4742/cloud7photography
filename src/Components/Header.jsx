import React, { useState} from 'react';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import Logo from '../logo/logo1.png'

function NavScrollExample() {
  const [open, setopen] = useState(true)

  const handleopen = () => {
    setopen(!open)
  }
  return (

    <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            id="MDB-logo"
            src={Logo}
            alt="MDB Logo"
            draggable="false"
            height="30"

          /></a>
        <button
          onClick={handleopen}
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"h
        ><IoMdMenu />
        </button>
        <div className={open ? " navbar-collapse" : "collapse"} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-2" ><i className="fas fa-plus-circle pe-2"></i>Home</Link>
            </li>
               <li className="nav-item">
              <Link to="/about" className="nav-link mx-2" ><i className="fas fa-bell pe-2"></i>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/bookus" className="nav-link mx-2" ><i className="fas fa-heart pe-2"></i>Book Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/Review" className="nav-link mx-2" ><i className="fas fa-heart pe-2"></i>Review</Link>
            </li>
           
          </ul>
        </div>

      </div>

      
    </nav>



  );
}


export default NavScrollExample;