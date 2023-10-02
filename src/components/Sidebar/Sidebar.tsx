// Sidebar.tsx
import React from 'react';

interface SidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

function Sidebar({ isSidebarOpen, closeSidebar }: SidebarProps) {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <div className="sidebar-header">
        <button type="button" className="close-btn" onClick={closeSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <ul className="sidebar-links">
        <li><a href="/" className="sidebar-link">Home</a></li>
        <li><a href="/about" className="sidebar-link">About</a></li>
        <li><a href="/project" className="sidebar-link">Project</a></li>
        <li><a href="/contact" className="sidebar-link">Contact</a></li>
      </ul>

      <ul className="social-icons">
        <li><a href="#" className="social-icon"><i className="fa-brands fa-linkedin"></i></a></li>
        <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook"></i></a></li>
        <li><a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a></li>
        <li><a href="#" className="social-icon"><i className="fa-brands fa-squarespace"></i></a></li>
        <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
