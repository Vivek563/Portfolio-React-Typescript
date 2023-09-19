import React, { useState, useEffect } from 'react';
import './PageRoute.css'
import Navbar from '../components/Navbar' 
import Sidebar from '../components/Sidebar'
import Header from '../components/Header' 
import About from '../components/About'
import Services from '../components/Services'
import Project from '../components/Project'
import Connect from '../components/Connect'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

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

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openSidebar = () => {
    console.log('open sidebar');
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
      <Services />
      <Project />
      <Connect />
      <Skills />
      <Timeline />
      <Blog />
      <Footer />
     
      

    </>
  )
}

export default PageRoute