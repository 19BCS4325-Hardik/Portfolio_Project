import React from 'react'
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-4" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="#">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar