import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isActive = (pathname) => {
    return location.pathname === pathname ? 'current_page' : '';
  };

  return (
    <div className="navbar">
		<p className="nav_name">Zhuo (Joe) Yang</p>
		<ul className="nav_title">
		  <li>Senior Software Engineer</li>
		  <li>Full-stack developer</li>
		  <li>CS Masters</li>
		  <li>Ex PingAn, SF Express</li>
		</ul>
		<div className="nav_divider"/>
		<div className="nav_page">
			<Link to="/about" className={isActive('/about')||isActive('/')}>ABOUT</Link><br/>
			<Link to="/personal_pro" className={isActive('/personal_pro')}>PERSONAL PROJECTS</Link><br/>
			<Link to="/tech_stack" className={isActive('/tech_stack')}>TECH STACK</Link><br/>			
		</div>
		<div className="nav_divider"/>
		<div>
		  <a href="https://github.com/herejoe" target="_blank" rel="noopener noreferrer">
			<i className="fa-brands fa-lg fa-github"></i>
		  </a>
		  <a href="https://linkedin.com/in/zhuoyang01" target="_blank" rel="noopener noreferrer">
			<i className="fa-brands fa-lg fa-linkedin"></i>
		  </a>
		  <a href="mailto:zhuoyang0101@gmail.com" target="_blank" rel="noopener noreferrer">
			<i className="fa-solid fa-lg fa-envelope"></i>
		  </a>
		</div>
    </div>
  );
}

export default Navbar;
