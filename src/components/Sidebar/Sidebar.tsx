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
      <li>
                <a href="https://github.com/vivek563" className="social-icon">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vivek563maurya"
                  className="social-icon"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vivekmaurya_563/"
                  className="social-icon"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:vivek563maurya@gmail.com"
                  className="social-icon"
                >
                  <i className="fas fa-paper-plane"></i>
                </a>
              </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
