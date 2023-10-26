import Card from "./Card";
import React from "react";

function Blog() {
  return (
    <>
      <section className="section blog bg-grey">
        <div className="section-title">
          <h2>Project</h2>
          <div className="underline"></div>
        </div>
        <div className="cardstyle">
          <Card 
              title="Institute of Professional Studies (College Website)"
              projectdiscription="I spearheaded college website development with MVC architecture, a client-centric focus, agile methodology, and Node.js/Express.js for the back-end. I ensured seamless integration of a user-friendly CMS and refined EJS front-end. My strengths included debugging, optimization, team collaboration, and quality assurance through automated testing. The result: an exceptional, cross-device performance website."
              sourcelink="https://github.com/Vivek563/Institute-of-Professional-Studies"
              livelink="https://github.com/Vivek563/Institute-of-Professional-Studies"
              
          /> 
          
          <Card 
              title="Notes Taking React App"
              projectdiscription="I led a ReactJS project, integrating Object-Oriented JavaScript, Material UI, and Context API, with a focus on SDLC, robust data storage, QA, and security. Our mobile optimization and version control followed Agile methodologies, highlighting client-centricity. I showcased adaptability, independence, and a dedication to technical excellence."
              sourcelink="https://github.com/Vivek563/Notes-taking"
              livelink="https://todonotesmaking.netlify.app/"
              
          /> 
          
          <Card 
              title="Digital FingerPrint (React)"
              projectdiscription="Digital Fingerprint is an open-source web application powered by Vite and React, designed for seamless visitor data analysis. It offers real-time insights into geographical specifics, including IP address, city, country, ISP, and more. Additionally, it provides comprehensive device details such as browser, operating system, screen resolution, and installed plugins. With its user-friendly interface and minimalist design."
              sourcelink="https://github.com/Vivek563/React-Blog-Application-Using-Appwrite"
              livelink="https://github.com/Vivek563/React-Blog-Application-Using-Appwrite"
              
          />  
          <Card 
              title="Outlook Email Clone (React)"
              projectdiscription="Experience the power of our React and Redux-based email client app, reminiscent of Outlook. Effortlessly manage your emails, view detailed email information, and take action with ease. Enjoy a sleek email list page with pagination, read/unread styling, and filter emails by favorites or status. Plus, stay organized with a user-friendly date format (dd/MM/yyyy hh:mm a). Email management has never been this seamless!"
              sourcelink="https://github.com/Vivek563/Outlook-email-Clone-React-app"
              livelink="https://vivekoutlookmail.netlify.app/"
              
          />  
          <Card 
              title="BCA Notes"
              projectdiscription="Build your Knowledge skills with the BCA Application. Learn the subject of BCA with a proper notes or become an expert of computer with this best BCA learning app. Learn to code with C Language for free with a many notes of BCA for learning app. If you’re reparing to take admission in BCA or doing BCA from any college then this BCA app will help you in ever for PREPARING NOTES clearing every problems."
              sourcelink="https://play.google.com/store/apps/details?id=com.vivek.bcanotes&hl=en&gl=US&pli=1"
              livelink="https://play.google.com/store/apps/details?id=com.vivek.bcanotes&hl=en&gl=US&pli=1"
              
          />  
          <Card 
              title="URL Shortener"
              projectdiscription="Introducing my custom URL shortener app, a sleek and efficient solution crafted with HTML, CSS, JavaScript, and EJS. Simplifying long, cumbersome links into concise, user-friendly URLs, this application offers a seamless browsing experience. Experience the convenience of effortless link sharing and tracking, all wrapped in an elegant, user-friendly design. Say goodbye to unwieldy URLs and embrace the power of simplicity with this intuitive URL shortener."
              sourcelink="https://github.com/Vivek563/Url-Shortner"
              livelink="https://github.com/Vivek563/Url-Shortner"
              
          /> 
          
          
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h1>Want to See All My Work?</h1>
          <h4>
            <a href="https://github.com/vivek563" target="blank">Click Me🙃</a>
          </h4>
        </div>
      </section>
    </>
  );
}

export default Blog;
