import React from 'react'

function Connect() {
  return (
    <>
    
  <section className="connect">
    <video autoPlay muted loop className="video-container" poster="./images/project-1.jpeg">
      <source src="./assets/connect.mp4" type="video/mp4"/>
      Sorry!!
    </video>

    <div className="video-banner">
    
      <div className="section-title about-title">
        <h2>let's get in touch</h2>
        <div className="underline"></div>
      </div>
     
      <p className="video-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam, aperiam tempora adipisci porro corporis
        vero distinctio aliquam mollitia quis, quia accusamus iusto recusandae minima, beatae laboriosam quo qui
        ratione.
      </p>
      <a href="contact.html" className="btn">contact me</a>
    </div>
  </section>
    </>
  )
}

export default Connect