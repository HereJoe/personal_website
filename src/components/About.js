import { Link } from 'react-router-dom';
import '../styles/About.css';
import ArrowIcon from './ArrowIcon';

const About = () => {
  return (
    <div className="about">
	  <div className="about_para">
		<p className="about_title">About Me</p>
		<p className="about_content">Hello, I'm Joe, a full-stack software engineer with over 7 years of experience. I've ontributed to major companies in China, including SF Express and Ping'An. Proficient in Java, and experienced with C, C++, and Python, my passion for technology fuels my expertise in JVM, storage, cache, proxy, messaging middleware, distributed systems, networking, as well as AI and Big Data. Currently pursuing a Master's degree in Computing and Innovation at the University of Adelaide, I aim to advance my career in software development post-graduation (Jun 2024). Actively seeking opportunities, I've garnered recommendations from my professors, acknowledging my exceptional academic performance.</p>
	  </div>
	  <div className="about_para">
	    <p className="about_title">Experience & Education</p>
		<div className="about_content">
			<ul>
			  <li>
				<span className ="date">July 2022 - Jun 2024</span>
				<span className ="institution">The University of Adelaide</span>
				<span className ="position">Master of Computing And Innovation</span>
			  </li>
			  <li>
				<span className ="date">Aug 2019 - Jun 2022</span>
				<span className ="institution">PingAn</span>
				<span className ="position">Senior Software Engineer</span>
			  </li>
			  <li>
				<span className ="date">Jan 2018 - Aug 2029</span>
				<span className ="institution">SF express</span>
				<span className ="position">Java Software Engineer</span>
			  </li>
			  <li>
				<span className ="date">Oct 2014 - Jan 2018</span>
				<span className ="institution">ZhongChengPinYe</span>
				<span className ="position">Full Stack Software Developer</span>
			  </li>
			</ul>

		</div>
	  </div>
	  <div className="about_para">
	    <p className="about_title">Personal Projects</p>
		<div className="about_content">
			<Link to="/personal_pro">
				Mini Games · Tank Online · Material Trans · A+STORE. [Click for more details]
			</Link>
			<div className="about_content_inline">
				<ArrowIcon/>
			</div>
		</div>
	  </div>
	  <div className="about_para">
	    <p className="about_title">Tech Stack</p>
		<div className="about_content">
			<Link to="/tech_stack">
				Java · Python · C · C++ · Full-stack · AI · MiningBigData. [Click for more details]			
			</Link>
			<div className="about_content_inline">
				<ArrowIcon/>
			</div>
		</div>
	  </div>
    </div>
  );
}

export default About;
