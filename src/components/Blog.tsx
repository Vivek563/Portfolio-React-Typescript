import React from 'react'

function Blog() {
  return (
    <>
    <section className="section blog bg-grey">

<div className="section-title">
  <h2>blog</h2>
  <div className="underline"></div>
</div>

<div className="section-center blog-center">
  {/* <!-- single card --> */}
  <div className="card">
    {/* <!-- front of the card --> */}
    <div className="card-side card-front">
      <img src="./assets/project-1.jpeg" alt="project-1"/>
      <div className="card-info">
        <h4>article title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni reiciendis doloribus dolorum porro
          assumenda odio deserunt natus. Adipisci, ipsum?
        </p>
        <div className="card-footer">
          <img src="./assets/hero-img-small.jpg" alt="author img" className=""/>
          <p>7 min read</p>

        </div>
      </div>
    </div>
    {/* <!-- end of front of the card --> */}

    {/* <!-- back of the card --> */}
    <div className="card-side card-back">
      <a href="#" className="btn">read more</a>
    </div>
    {/* <!-- end of back of the card --> */}
  </div>
  {/* <!-- end of single card --> */}

  {/* <!-- single card --> */}
  <div className="card">
    {/* <!-- front of the card --> */}
    <div className="card-side card-front">
      <img src="./assets/project-2.jpeg" alt="project-1"/>
      <div className="card-info">
        <h4>article title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni reiciendis doloribus dolorum porro
          assumenda odio deserunt natus. Adipisci, ipsum?
        </p>
        <div className="card-footer">
          <img src="./assets/hero-img-small.jpg" alt="author img" className=""/>
          <p>7 min read</p>

        </div>
      </div>
    </div>
    {/* <!-- end of front of the card --> */}

    {/* <!-- back of the card --> */}
    <div className="card-side card-back">
      <a href="#" className="btn">read more</a>
    </div>
    {/* <!-- end of back of the card --> */}
  </div>
  {/* <!-- end of single card --> */}

  {/* <!-- single card --> */}
  <div className="card">
    {/* <!-- front of the card --> */}
    <div className="card-side card-front">
      <img src="./assets/project-3.jpeg" alt="project-1"/>
      <div className="card-info">
        <h4>article title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni reiciendis doloribus dolorum porro
          assumenda odio deserunt natus. Adipisci, ipsum?
        </p>
        <div className="card-footer">
          <img src="./assets/hero-img-small.jpg" alt="author img" className=""/>
          <p>7 min read</p>

        </div>
      </div>
    </div>
    {/* <!-- end of front of the card --> */}

    {/* <!-- back of the card --> */}
    <div className="card-side card-back">
      <a href="#" className="btn">read more</a>
    </div>
    {/* <!-- end of back of the card --> */}
  </div>
  {/* <!-- end of single card --> */}

  {/* <!-- single card --> */}
  <div className="card">
    {/* <!-- front of the card --> */}
    <div className="card-side card-front">
      <img src="./assets/project-4.jpeg" alt="project-1"/>
      <div className="card-info">
        <h4>article title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni reiciendis doloribus dolorum porro
          assumenda odio deserunt natus. Adipisci, ipsum?
        </p>
        <div className="card-footer">
          <img src="./assets/hero-img-small.jpg" alt="author img" className=""/>
          <p>7 min read</p>

        </div>
      </div>
    </div>
    {/* <!-- end of front of the card -->

    <!-- back of the card --> */}
    <div className="card-side card-back">
      <a href="#" className="btn">read more</a>
    </div>
    {/* <!-- end of back of the card --> */}
  </div>
  {/* <!-- end of single card --> */}
</div>

</section>
    </>
  )
}

export default Blog