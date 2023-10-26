import React from 'react'

function Services() {
  return (
    <>
    <section className="section bg-grey services">

<div className="section-title services-title">
  <h2>services</h2>
  <div className="underline"></div>
</div>

<div className="section-center services-center">

  <article style={{backgroundColor:"#f97b8b"}} className="service">
    <i className="fa-solid fa-code service-icon"></i>
    <h4>Web Development</h4>
    <div className="underline"></div>
    <p>
    Create web application with admin panel and all the latest features and customer support.
    </p>
  </article>

  <article style={{
    backgroundColor: "f97b8b",
  }} className="service">
    <i className="fa-brands fa-sketch service-icon"></i>
    <h4>App design</h4>
    <div className="underline"></div>
    <p>
    Develop software for your company or business so it helps you to manage your business easily.
    </p>
  </article>

  <article style={{
    backgroundColor: "#6c6ce5",
  }} className="service">
    <i className="fa-brands fa-android service-icon"></i>
    <h4>Freelancing</h4>
    <div className="underline"></div>
    <p>
    I am available for freelance work so if you need any of your project to be done you can contact me.
    </p>
  </article>




</div>
</section>
</>
  )
}

export default Services