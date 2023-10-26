import "./PageRoute.css";
import React from "react";
import Header from "../HeroSection/Header";
import About from "../About/About";
import Services from "../Service/Services";
import Connect from "../Contact/Connect";
import Skills from "../Skills/Skills";
import Timeline from "../Timeline/Timeline";
import Blog from "../Project/Blog";

function PageRoute() {
 
  return (
    <>
    
      <Header />
      <About />
      <Skills />
      <Services />
      <Timeline />
      <Blog />
      <Connect />
      {/* <Project /> */}
    </>
  );
}

export default PageRoute;
