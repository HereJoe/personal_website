import '../styles/TechStack.css';
const TechStack = () => {
  return (
    <div className="tech">
	  <div className="tech_para">
		<p className="tech_title">Soft Skills</p>
		<div className="tech_content">
		  <ul>
		    <li>Communication · Problem Solving · Project Management · Requirements Analysis</li>
		  </ul>
		</div>
	  </div>
	  <div className="tech_para">
        <p className="tech_title">Programming Languages</p>
        <div className="tech_content">
          <ul>
            <li>Java · Python · C# · C/C++ · Go · PHP · Lua · Shell</li>
          </ul>
        </div>
      </div>
	  <div className="tech_para">
		<p className="tech_title">Cloud Service/Operating System/Container</p>
		<div className="tech_content">		
			<ul>
			  <li>AWS · GCP · Azure · Linux · Ubuntu · Docker · Kubernetes</li>
			</ul>
		</div>
	  </div>
	  <div className="tech_para">
		<p className="tech_title">Front-end Development</p>
		<div className="tech_content">
			<ul>
			  <li>Html · CSS · JavaScript · TypeScript · JQuery · Vue.js · React.js · Angular.js · Next.js · Express.js · BootStrap</li>
			</ul>
		</div>
	  </div>
	  <div className="tech_para">
		<p className="tech_title">Back-end Development</p>
		<div className="tech_content">
			<ul>
			  <li><span className ="subtitle">Main Frame:</span><span>Sprng MVC · Spring Boot · Spring Cloud · gRPC · Dubbo</span></li>
			  <li><span className ="subtitle">SQL Database:</span><span>Redis · MySQL · PostgreSQL · Oracle · MSSQL · Elasticsearch</span></li>
			  <li><span className ="subtitle">NoSQL Database:</span><span>Neo4j · MongoDB · Redis</span></li>
			  <li><span className ="subtitle">Proxy&Network:</span><span>F5 · LVS · Nginx · HAProxy · Netty</span></li>
			  <li><span className ="subtitle">Middleware:</span><span>Kafka · RabbitMQ · ActiveMQ</span></li>
			  <li><span className ="subtitle">BPM:</span><span>Activiti · Self-development</span></li>
			  <li><span className ="subtitle">Other Techs:</span><span>SQL · Mybatis · Mycat · Node.js · Chef · RestAPIs · Lambda Expressions · Hibernate · Zookeeper · Seata · XXL-Job · FastDFS · Microservices · Distributed Systems</span></li>
			</ul>
		</div>
	  </div>
	  <div className="tech_para">
        <p className="tech_title">UML & Web Design & Other Tools</p>
        <div className="tech_content">
            <ul>
              <li>Rose · Visio · PowerDesigner · Wordpress · Webflow · Dreamwear · Flash · Photoshop · Jmeter · Wireshark</li>
            </ul>
        </div>
      </div>
      <div className="tech_para">
        <p className="tech_title">Software Development Practices</p>
        <div className="tech_content">
            <ul>
              <li>JVM/GC Tuning · Agile Development · TDD · DevOps · CI/CD Practices · Web Development · Software Development · API development · Software Architecture Design · Business Logic Design</li>
            </ul>
        </div>
      </div>
      <div className="tech_para">
        <p className="tech_title">Testing and QA</p>
        <div className="tech_content">
            <ul>
              <li>Python Automated Testing · Selenium IDE · Unit Test · Integration Testing · Regression Testing</li>
            </ul>
        </div>
      </div>
      <div className="tech_para">
        <p className="tech_title">Computer Science Basics</p>
        <div className="tech_content">
            <ul>
              <li>Algorithms · Data Structures · Computer Systems · Operating Systems · Networking Systems · Machine Learning · Mining Big Data</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
