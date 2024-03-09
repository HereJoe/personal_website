import React,{useContext,useState} from 'react';

import { MyContext } from '../App';
import '../styles/PersonalPro.css';
const PersonalPro = () => {
  const { state, updateParams } = useContext(MyContext);
  
  const [showMsg1, setShowMsg1] = useState(false);
  const [showMsg2, setShowMsg2] = useState(false);
  const toggleMessage1 = () => {
    setShowMsg1(true);
	setTimeout(() => {
    setShowMsg1(false);
    }, 1000);
  };
  const toggleMessage2 = () => {
    setShowMsg2(true);
    setTimeout(() => {
    setShowMsg2(false);
    }, 1000);
  };
  
  return (
    <div className="pro">
	  <div className="pro_para">
		<div className="pro_img"><img src="images/material_trans.png" alt="project image"/></div>
		<div className="pro_info">
			<p className="pro_title">Material Transportation</p>
			<div className="pro_desc">
			  <p>
			    Solving the shortest path problem for material transportation within a factory, involving multiple objectives and common path challenges. Implemented using Java and MySQL.		
			  </p>
			  <p>
			    <span className ="subtitle">Skills: </span>
			    <span>Java · Spring Boot · MySQL · Procedure Development</span>
			  </p>
		  </div>
		  <div className="pro_links">
			<ul>
			  <li>
				<a href="https://github.com/HereJoe/MaterialTransportation" target="_blank" rel="noopener noreferrer">
				  <i className="fa-brands fa-lg fa-github"></i>
				  GitHub
				</a>
			  </li>
			  <li>
				<a href="http://47.106.108.49/shortestPath" target="_blank" rel="noopener noreferrer">
				  <i className="fa-sharp fa-solid fa-circle-play fa-lg"></i>
				  run algorithm
				</a>
			  </li>
			  <li>
				<a href="http://47.106.108.49/shortestPath/swagger-ui.html" target="_blank" rel="noopener noreferrer">
				  <i className="fa-sharp fa-solid fa-circle-play fa-lg"></i>
				  Management Console
				</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </div>
	  <div className="pro_para">
		<div className="pro_img"><img src="images/games.png" alt="project image"/></div>
		<div className="pro_info">
			<p className="pro_title">Mini Games</p>
			<div className="pro_desc">
			  <p>
			    A collection of pure front-end games based on React, no data storage. This project will be updated from time to time to add more games.		
			  </p>
			  <p>
			    <span className ="subtitle">Skills: </span>
			    <span>React · Html · CSS</span>
			  </p>
		  </div>
		  <div className="pro_links">
			<ul>
			  <li>
				<a href="https://github.com/HereJoe/MiniGames" target="_blank" rel="noopener noreferrer">
				  <i className="fa-brands fa-lg fa-github"></i>
				  GitHub
				</a>
			  </li>
			  <li>
				<a href="http://47.106.108.49/tic_tac_toe/" target="_blank" rel="noopener noreferrer">
				  <i className="fa-sharp fa-solid fa-circle-play fa-lg"></i>
				  Tic Tac Toe
				</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </div>
	  <div className="pro_para">
		<div className="pro_img"><img src="images/tank.png" alt="project image"/></div>
		<div className="pro_info">
			<p className="pro_title">Tank Online (under repair)</p>
			<div className="pro_desc">
			  <p>
			    A classic mini-game developed with AWT for graphical interface implementation, utilizing Netty for multiplayer network communication. The project includes collision detection and handling algorithms.	
			  </p>
			  <p>
			    <span className ="subtitle">Skills: </span>
			    <span> Java · AWT · MySQL · Netty</span>
			  </p>
		  </div>
		  <div className="pro_links">
			<ul>
			  <li>
				<a href="#"  onClick={(event)=>{event.preventDefault();toggleMessage1()}} target="_blank" rel="noopener noreferrer">
				  <i className="fa-brands fa-lg fa-github"></i>
				  GitHub
				</a>
			  </li>
			  <li>

				<a href="#"  onClick={(event)=>{event.preventDefault();toggleMessage1()}} target="_blank" rel="noopener noreferrer">
				  <i className="fa-sharp fa-solid fa-circle-play fa-lg"></i>
				  play game
				</a>
			  </li>
			</ul>
		  </div>
		  {showMsg1 && (<div className="pro_msg">This project is under repair!</div>)}
		</div>
	  </div>
	  <div className="pro_para">
		<div className="pro_img"><img src="images/estore.png" alt="project image"/></div>
		<div className="pro_info">
			<p className="pro_title">A+Store (not open)</p>
			<div className="pro_desc">
			  <p>
			    Implemented a fully simulated real-world online shopping platform, addressing challenges such as concurrency, distributed transactions, permission management, and API monitoring. The project leverages technologies Nginx, RabbitMQ, Seata, Shiro, and APM.		
			  </p>
			  <p>
			    <span className ="subtitle">Skills: </span>
			    <span>Java · Spring Cloud · Redis · Nginx, Kafka, ELS</span>
			  </p>
		  </div>
		  <div className="pro_links">
			<ul>
			  <li>
				<a href="#"  onClick={(event)=>{event.preventDefault();toggleMessage2()}} target="_blank" rel="noopener noreferrer">
				  <i className="fa-brands fa-lg fa-github"></i>
				  GitHub
				</a>
			  </li>
			  <li>
				<a href="#"  onClick={(event)=>{event.preventDefault();toggleMessage2()}} target="_blank" rel="noopener noreferrer">
				  <i className="fa-sharp fa-solid fa-circle-play fa-lg"></i>
				  Web Application
				</a>
			  </li>
			  <li>
				<a href="#"  onClick={(event)=>{event.preventDefault();toggleMessage2()}} target="_blank" rel="noopener noreferrer">
				  <i className="fa-sharp fa-solid fa-circle-play fa-lg"></i>
				  Management Console
				</a>
			  </li>
			</ul>
		  </div>
		  {showMsg2 && (<div className="pro_msg">This project is not open now!</div>)}
		</div>
	  </div>	  
    </div>
  );
}

export default PersonalPro;
