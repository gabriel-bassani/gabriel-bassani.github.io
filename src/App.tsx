import React from 'react';
import './App.css';
import { Project } from './components/project';
import { TechnologiesSection } from './components/technologies-section';
import { LanguageProvider, useLanguage } from './contexts/language-context';
import { portfolio } from './portfolio';


function App() {
  const { toggleLanguage } = useLanguage();



  return (
      <div className="App">
        <div className='flex right-5 top-3 fixed gap-3' >
          <button onClick={() => {
            console.log('pt');
            
            toggleLanguage('pt')
            }}>
            <img src="/assets/icons/flag-brazil.svg" alt="Brazil Flag" width={30}/>
          </button>
          <button onClick={() => {{
            console.log('en');

            toggleLanguage('en')
            }}}>
            <img src="/assets/icons/flag-usa.svg" alt="USA Flag"  width={30}/>
          </button>
        </div>
        <TechnologiesSection/>  
        {portfolio.map((project) => {
          return(
            <Project images={project.images} name={project.name} title={project.title}  />
          )
        })}

      </div>
  );
}

export default App;
