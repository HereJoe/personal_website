import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TechStack from './components/TechStack';
import PersonalPro from './components/PersonalPro';
import Footer from './components/Footer';

export const MyContext = createContext();
function App() {
  const [contextState, setContextState] = useState({currentPage: 'about'});
  const updateParams = (newParams) => {
    const filteredParams = Object.keys(newParams).reduce((acc, key) => {
      if (contextState.hasOwnProperty(key)) {
        acc[key] = newParams[key];
      }
      return acc;
    }, {});

    setContextState((prev) => ({ ...prev, ...filteredParams }));
  };
  const contextValue = {
    state: contextState,
    updateParams,
  };
  console.log(contextState.currentPage);
  return (
	<MyContext.Provider value={contextValue}>
		<Router>
		<div className="App">
			<div className="App_left">
				<Navbar/>
				<Footer/>
			</div>
			<div className="App_right">
				<Routes>
					<Route path="/"  element={<About />} />
					<Route path="/about"  element={<About />} />
					<Route path="/personal_pro"  element={<PersonalPro />} />
					<Route path="/tech_stack"  element={<TechStack />} />
				</Routes>
			</div>		  
		</div>
		</Router>
    </MyContext.Provider>
  );
}

export default App;
