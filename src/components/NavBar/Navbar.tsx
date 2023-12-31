import React from "react";

interface NavBarProps {
  isNavbarFixed: boolean;
  openSidebar: () => void;
}

function Navbar({ isNavbarFixed, openSidebar }: NavBarProps) {
  return (
   <>
    <nav  id="nav"  className={isNavbarFixed ? 'navbar-fixed' : ''}>
    <div className="nav-center">

      <div className="nav-header">
        <img style={{width:"336px" , height:"70px"}} src="./assets/logo.svg" alt="nav-logo" className="nav-logo"/>
        <button type="button" className="nav-btn"  onClick={openSidebar} id="nav-btn">
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </div>

      <ul className="nav-links">
        <li><a href="/" className="nav-link">Home</a></li>
        <li><a href="about" className="nav-link">About</a></li>
        <li><a href="contact" className="nav-link">Contact</a></li>
        <li><a href="project" className="nav-link">Project</a></li>
      </ul>
    </div>
  </nav>
   </>
  )
}

export default Navbar