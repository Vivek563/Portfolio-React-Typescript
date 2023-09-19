import React from 'react'

function About() {
  return (
    
    <>
    <section className="section about">
<div className="section-center  about-center">

  <article className="about-img-container  hero-img-container ">
    <div className="overlay"></div>
    <img src="./assets/about-img.jpg" alt="about-img" className="hero-img about-img"/>
  </article>

  <article className="about-info">

    <div className="section-title about-title">
      <h2>About</h2>
      <div className="underline"></div>
    </div>

    <p>
    I am a passionate Developer with an eye for design, bringing creativity and functionality together to deliver exceptional user experiences. I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and softwares. My passion is to design digital user experiences through the bold interface and meaningful interactions.
    </p>

    <p>
    Self motivated and hard working developer seeking for an opportunity to work in a challenging environment to prove my skill and utilize my knowledge & intelligence in the growth of the organization.
    </p>

    <a href="./about.html" className="btn about-btn">about me</a>
  </article>
</div>
</section>
    </>
  )
}

export default About