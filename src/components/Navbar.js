import React, { useContext } from 'react';
import { MyContext } from '../App';
import '../styles/Navbar.css';

const Navbar = () => {
  const { state, updateParams } = useContext(MyContext);
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
			<a href="#" onClick={(event)=>{event.preventDefault();updateParams({currentPage:"about"})}} className={state.currentPage==='about'?"current_page":""}>ABOUT</a><br/>
			<a href="#" onClick={(event)=>{event.preventDefault();updateParams({currentPage:"personal_pro"})}} className={state.currentPage=='personal_pro'?"current_page":""}>PERSONAL PROJECTS</a><br/>
			<a href="#" onClick={(event)=>{event.preventDefault();updateParams({currentPage:"tech_stack"})}} className={state.currentPage=='tech_stack'?"current_page":""}>TECH STACK</a><br/>
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
