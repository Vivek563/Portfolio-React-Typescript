interface ProjectProps {
    title: string;
    projectdiscription:string;
    sourcelink:string,
    livelink:string,
  }
  
  function Card({ title, projectdiscription,sourcelink,livelink }: ProjectProps) {
    return (
      <>
        <div className="card-project-style">
          <div className="project-content">
            <h4 className="project-name">{title}</h4>
            <br />
            <p className="project-discription">
              {projectdiscription}
            </p>
            <br />
            <div className="project-btn-prop">
              <a href={sourcelink} target="blank"><button className="btn">Source Code</button></a>
              <a href={livelink} target="blank"><button className="btn">Live Link</button></a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Card;
  