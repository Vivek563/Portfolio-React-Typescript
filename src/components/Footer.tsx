import React from 'react'

function Footer() {
  return (
    <>
    <footer className="footer">
    <ul className="social-icons">
      <li><a href="#" className="social-icon"><i className="fa-brands fa-linkedin"></i></a></li>
      <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook"></i></a></li>
      <li><a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a></li>
      <li><a href="#" className="social-icon"><i className="fa-brands fa-squarespace"></i></a></li>
      <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li>
    </ul>
    <p>&copy; <span id="date"></span> john doe. all rights reserved</p>
  </footer>
    </>
  )
}

export default Footer