interface SidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

function Sidebar({ isSidebarOpen, closeSidebar }: SidebarProps) {

  return (
   <>
   
    <aside className={isSidebarOpen ? 'show-sidebar' : ''} id="sidebar">
    <div className="sidebar-header">
      <button type="button" className="close-btn" onClick={closeSidebar} id="close-btn">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>

    <ul className="sidebar-links">
      <li><a href="./index.html" className="sidebar-link">Home</a></li>
      <li><a href="./about.html" className="sidebar-link">About</a></li>
      <li><a href="./projects.html" className="sidebar-link">Project</a></li>
      <li><a href="./contact.html" className="sidebar-link">Contact</a></li>
    </ul>

    <ul className="social-icons">
      <li><a href="#" className="social-icon"><i className="fa-brands fa-linkedin"></i></a></li>
      <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook"></i></a></li>
      <li><a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a></li>
      <li><a href="#" className="social-icon"><i className="fa-brands fa-squarespace"></i></a></li>
      <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li>
    </ul>
  </aside>
  
  </>
  )
}

export default Sidebar