import React from 'react'

function Header() {
  return (
    <>
    <header className="hero">
<div className="section-center hero-center">

  <article className="hero-info">
    <h3>Hola,</h3>
    <div className="underline"></div>
    <h1>i'm Vivek</h1>
    <h4>Front-end & Android Developer</h4>
    <a href="./contact.html" className="btn hero-btn">hire me</a>
    <ul className="social-icons hero-icons">
      <li><a href="https://github.com/vivek563" className="social-icon"><i className="fa-brands fa-github"></i></a></li>
      <li><a href="https://www.linkedin.com/in/vivek563maurya" className="social-icon"><i className="fa-brands fa-linkedin"></i></a></li>
      <li><a href="https://www.instagram.com/vivekmaurya_563/" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li>
      <li><a href="mailto:vivek563maurya@gmail.com" className="social-icon"><i className="fas fa-paper-plane"></i></a></li>
      {/* <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li> */}
    </ul>
  </article>

  <article className="hero-img-container">
    <div className="overlay"></div>
    <img src="./assets/hero-img.jpeg" alt="hero-photo" className="hero-img"/>
  </article>
</div>
</header>
    </>
  )
}

export default Header