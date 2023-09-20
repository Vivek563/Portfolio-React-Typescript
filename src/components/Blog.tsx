import React from "react";

function Blog() {
  return (
    <>
      <section className="section blog bg-grey">
        <div className="section-title">
          <h2>Project</h2>
          <div className="underline"></div>
        </div>

        <div className="section-center blog-center">
          {/* <!-- single card --> */}
          <div className="card">
            {/* <!-- front of the card --> */}
            <div className="card-side card-front">
              <img src="./assets/project-1.jpeg" alt="project-1" />
              <div className="card-info">
                <h4>Institute of professional studies (College Website)</h4>
                <p style={{ fontSize: "15px" }}>
                  I expertly designed a college website, integrating a CMS with
                  EJS for a seamless front-end. Using Node.js/Express.js, I
                  ensured a responsive back-end with robust schemas, security,
                  and mobile optimization for smooth performance.
                </p>
                <div className="card-footer">
                <p><a href="https://github.com/Vivek563/Institute-of-Professional-Studies">Source Code</a></p>
                  
                </div>
              </div>
            </div>
            {/* <!-- end of front of the card --> */}
          </div>
          {/* <!-- end of single card --> */}

          {/* <!-- single card --> */}
          <div className="card">
            {/* <!-- front of the card --> */}
            <div className="card-side card-front">
              <img src="./assets/project-2.jpeg" alt="project-1" />
              <div className="card-info">
                <h4>Notes Taking Project</h4>
                <p>I led a ReactJS project with Material UI and Context API, creating a user-centric note app with drag-and-drop, data persistence, rigorous testing, automation, security, and mobile optimization for efficient collaboration.
                </p>
                <div className="card-footer">
                <p><a href="https://github.com/Vivek563/Notes-taking">Source Code</a></p>
                  <p><a href="https://todonotesmaking.netlify.app/">Live Link</a></p>
                </div>
              </div>
            </div>
            {/* <!-- end of front of the card --> */}

          </div>
          {/* <!-- end of single card --> */}

          {/* <!-- single card --> */}
          <div className="card">
            {/* <!-- front of the card --> */}
            <div className="card-side card-front">
              <img src="./assets/project-3.jpeg" alt="project-1" />
              <div className="card-info">
                <h4>Color Picker website</h4>
                <p>
I engineered an application with an intuitive color picker module, enabling users to preview and copy color hex codes effortlessly using advanced JavaScript techniques and seamless clipboard API integration.
                </p>
                <div className="card-footer">
                  <p><a href="https://github.com/Vivek563/ColorPicker">Source Code</a></p>
                  <p><a href="https://osmcolor.netlify.app/">Live Link</a></p>
                  
                </div>
              </div>
            </div>
           
          </div>
          </div>
          <div style={{textAlign:"center", marginTop:"30px"}}>
          <h1 >Want to See All My Work?</h1>
          <h4><a href="">Click Me🙃</a></h4> 
          {/* TODO */}
          </div>
      </section>
    </>
  );
}

export default Blog;
