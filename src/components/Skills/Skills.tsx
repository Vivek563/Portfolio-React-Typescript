

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
        

        <div className="skill">
          <p>HTML/CSS</p>
          <div className="skill-container">
            <div className="skill-value"></div>
            <p className="skill-text">95%</p>
          </div>
        </div>

        <div className="skill">
          <p>Javascript</p>
          <div className="skill-container">
            <div className="skill-value value-70"></div>
            <p className="skill-text skill-text-70">80%</p>
          </div>
        </div>

        <div className="skill">
          <p>React</p>
          <div className="skill-container">
            <div className="skill-value react"></div>
            <p className="skill-text react-text">70%</p>
          </div>
        </div>
        <div className="skill">
          <p>Typescript</p>
          <div className="skill-container">
            <div className="skill-value typescript"></div>
            <p className="skill-text skill-text-80">80%</p>
          </div>
        </div>

      </article>

      <article>
      <div className="skill">
          <p>Java</p>
          <div className="skill-container">
            <div className="skill-value value-80"></div>
            <p className="skill-text skill-text-80">80%</p>
          </div>
        </div>

        <div className="skill">
          <p>Node</p>
          <div className="skill-container">
            <div className="skill-value node"></div>
            <p className="node-text">50%</p>
          </div>
        </div>

        <div className="skill">
          <p>Mongodb</p>
          <div className="skill-container">
            <div style={{backgroundColor:"#6c6ce5"}} className="skill-value node"></div>
            <p  className="node-text">50%</p>
          </div>
        </div>

        <div className="skill">
          <p>Git/Github</p>
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