import Project from "./Project";


function Blog() {
  return (
    <>
      <section className="section blog bg-grey">
        <div className="section-title">
          <h2>Project</h2>
          <div className="underline"></div>
        </div>
        <div className="cardstyle">
          <Project 
              title="Institute of Professional Studies (College Website)"
              projectdiscription="I spearheaded college website development with MVC architecture, a client-centric focus, agile methodology, and Node.js/Express.js for the back-end. I ensured seamless integration of a user-friendly CMS and refined EJS front-end. My strengths included debugging, optimization, team collaboration, and quality assurance through automated testing. The result: an exceptional, cross-device performance website."
              sourcelink="https://github.com/Vivek563/Institute-of-Professional-Studies"
              livelink="https://github.com/Vivek563/Institute-of-Professional-Studies"
              
          /> 
          
          <Project 
              title="Notes Taking React App"
              projectdiscription="I led a ReactJS project, integrating Object-Oriented JavaScript, Material UI, and Context API, with a focus on SDLC, robust data storage, QA, and security. Our mobile optimization and version control followed Agile methodologies, highlighting client-centricity. I showcased adaptability, independence, and a dedication to technical excellence."
              sourcelink="https://github.com/Vivek563/Notes-taking"
              livelink="https://todonotesmaking.netlify.app/"
              
          /> 
          
          <Project 
              title="Blog App Using Appwrite (React)"
              projectdiscription="I developed a React Blog App using Appwrite as the database, featuring user login and signup, image uploading, and comprehensive CRUD functionality. This application enables users to create, read, update, and delete blog posts while securely managing their accounts and multimedia content, offering a seamless and engaging blogging experience"
              sourcelink="https://github.com/Vivek563/React-Blog-Application-Using-Appwrite"
              livelink="https://github.com/Vivek563/React-Blog-Application-Using-Appwrite"
              
          /> 
          
          
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h1>Want to See All My Work?</h1>
          <h4>
            <a href="">Click Me🙃</a>
          </h4>
        </div>
      </section>
    </>
  );
}

export default Blog;
