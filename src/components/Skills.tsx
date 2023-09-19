import React from 'react'

function Skills() {
  return (
   <>
   
  <section className="section skills">
    <div className="section-title">
      <h2>skills</h2>
      <div className="underline"></div>
    </div>

    <div className="section-center skills-center">

      <article>
        <h3>frontend</h3>

        <div className="skill">
          <p>HTML/CSS</p>
          <div className="skill-container">
            <div className="skill-value"></div>
            <p className="skill-text">50%</p>
          </div>
        </div>

        <div className="skill">
          <p>Javascript</p>
          <div className="skill-container">
            <div className="skill-value value-70"></div>
            <p className="skill-text skill-text-70">70%</p>
          </div>
        </div>

        <div className="skill">
          <p>React</p>
          <div className="skill-container">
            <div className="skill-value value-80"></div>
            <p className="skill-text skill-text-80">80%</p>
          </div>
        </div>

      </article>

      <article>
        <h3>backend</h3>

        <div className="skill">
          <p>Node</p>
          <div className="skill-container">
            <div className="skill-value"></div>
            <p className="skill-text">50%</p>
          </div>
        </div>

        <div className="skill">
          <p>PHP</p>
          <div className="skill-container">
            <div className="skill-value value-70"></div>
            <p className="skill-text skill-text-70">70%</p>
          </div>
        </div>

        <div className="skill">
          <p>Python</p>
          <div className="skill-container">
            <div className="skill-value value-80"></div>
            <p className="skill-text skill-text-80">80%</p>
          </div>
        </div>

      </article>

      <article className="backend"></article>
    </div>
  </section>
   </>
  )
}

export default Skills