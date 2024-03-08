import React, { createContext, useState } from 'react';
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
		<div className="App">
			<div className="App_left">
				<Navbar/>
				<Footer/>
			</div>
			<div className="App_right">
				{contextState.currentPage === 'about' && <About />}
				{contextState.currentPage === 'personal_pro' && <PersonalPro />}
				{contextState.currentPage === 'tech_stack' && <TechStack />}
			</div>		  
		</div>
    </MyContext.Provider>
  );
}

export default App;
