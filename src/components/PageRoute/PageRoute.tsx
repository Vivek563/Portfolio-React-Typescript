import  { useState, useEffect } from "react";
import "./PageRoute.css";
import Navbar from "../NavBar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../HeroSection/Header";
import About from "../About/About";
import Services from "../Service/Services";
// import Project from '../components/Project'
import Connect from "../Contact/Connect";
import Skills from "../Skills/Skills";
import Timeline from "../Timeline/Timeline";
import Blog from "../Project/Blog";
import Footer from "../Footer/Footer";

function PageRoute() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Add fixed class to navbar on scroll
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openSidebar = () => {
    console.log("open sidebar");
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Navbar isNavbarFixed={isNavbarFixed} openSidebar={openSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Header />
      <About />
      <Skills />
      <Services />
      <Timeline />
      <Blog />
      <Connect />
      <Footer />
      {/* <Project /> */}
    </>
  );
}

export default PageRoute;
