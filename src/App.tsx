import PageRoute from "./components/PageRoute/PageRoute.js";
import React from "react";
import { Outlet } from 'react-router-dom'
import Navbar from "./components/NavBar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import  { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar.js";
import './components/PageRoute/PageRoute.css'


import "./App.css";

function App() {

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
      <Outlet/>
      <Footer/>
      {/* <Intro/> */}
    </>
  );
}

export default App;
