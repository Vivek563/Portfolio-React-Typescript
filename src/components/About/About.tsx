

function About() {
  return (
    <>
      <section className="section about">
        <div className="section-center  about-center">
          <article className="about-img-container  hero-img-container ">
            <div className="overlay"></div>
            <img
              src="./assets/about-img.jpg"
              alt="about-img"
              className="hero-img about-img"
            />
          </article>

          <article className="about-info">
            <div className="section-title about-title">
              <h2>About</h2>
              <div className="underline"></div>
            </div>

            <p>
              I am a passionate and dedicated developer with a keen eye for
              design, dedicated to the art of crafting exceptional digital
              experiences. My journey in the world of technology has been driven
              by an unwavering commitment to creativity and functionality,
              bringing forth innovative solutions that resonate with users. With
              a portfolio spanning a diverse range of projects, I have had the
              privilege of working with clients of all sizes, from startups to
              established enterprises. My expertise lies in creating elegant and
              contemporary websites, web services, and software applications
              that seamlessly blend form and function.
            </p>
            <a href="./about.html" className="btn about-btn">
              about me
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
