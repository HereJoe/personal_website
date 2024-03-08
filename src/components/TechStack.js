import '../styles/TechStack.css';
const TechStack = () => {
  return (
    <div className="tech">
	  <div className="tech_para">
		<p className="tech_title">Programming Languages</p>
		<div className="tech_content">
		  <ul>
		    <li>Java · Python · C · C++ · Lua</li>
		  </ul>
		</div>
	  </div>
	  <div className="tech_para">
		<p className="tech_title">Operating Systems and Containers</p>
		<div className="tech_content">		
			<ul>
			  <li>Linux · Docker · Alibaba Cloud (similar to AWS)</li>			  
			</ul>
		</div>
	  </div>
	  <div className="tech_para">
		<p className="tech_title">Frameworks and Technologies</p>
		<div className="tech_content">		
			<ul>
			  <li><span className ="subtitle">MainFrame:</span><span>Sprng MVC · Spring Boot · Spring Cloud · Dubbo</span></li>
			  <li><span className ="subtitle">Databases:</span><span>Redis · MySQL · PostgreSQL · Oracle · Mybatis · MycatData</span></li>
			  <li><span className ="subtitle">Processing:</span><span>ELKJVM/GC Tuning</span></li>
			  <li><span className ="subtitle">BPM:</span><span>Activiti · Self-development</span></li>
			  <li><span className ="subtitle">Proxy&Network:</span><span>Nginx · HAProxy · LVS · F5 · Netty</span></li>
			  <li><span className ="subtitle">Middleware:</span><span>Kafka · RabbitMQ · ActiveMQ</span></li>
			  <li><span className ="subtitle">Distributed tech:</span><span>Zookeeper · XXL-Job · Seata · FastDFS</span></li>
			</ul>
		</div>
	  </div>
	  <div className="tech_para">
		<p className="tech_title">Front-end / Web Technologies</p>
		<div className="tech_content">		
			<ul>
			  <li>React · JQuery · Javascript · Node.js · Html · CSS · Wordpress · Webflow · Dreamwear · Flash · Photoshop</li>
			</ul>
		</div>
	  </div>
	  <div className="tech_para">
		<p className="tech_title">AI & Mining Big Data</p>
		<div className="tech_content">		
			<ul>
			  <li><span className ="subtitle">Data Analysis and Visualization</span><span>Pandas · NumPy · Matplotlib · Seaborn</span></li>
			  <li><span className ="subtitle">Machine Learning:</span><span>Scikit-learn · TensorFlow (Keras)</span></li>
			  <li><span className ="subtitle">Big Data Processing:</span><span>Apache Spark</span></li>
			  <li><span className ="subtitle">Time Series Analysis:</span><span>ARIMA · LSTM</span></li>
			  <li><span className ="subtitle">Association Rule Minin:</span><span>Apriori</span></li>
			</ul>
		</div>
	  </div>
	  <div className="tech_para">
		<p className="tech_title">Others</p>
		<div className="tech_content">		
			<ul>
			  <li><span className ="subtitle">Tools</span>
			  <span>Git · SVN · Jmeter · Wireshark · Chif · Rose · Visio · PowerDesigner</span></li>
			  <li><span className ="subtitle">Experience:</span><span>JVM/GC Tuning · IaaS · Microservices · Distributed Systems · Agile Dev · CI/CD</span></li>
			</ul>
		</div>
	  </div>	 
    </div>
  );
}

export default TechStack;
