import React from 'react';
import './App.css';
import { Project } from './components/project';
import { TechnologiesSection } from './components/technologies-section';
import { LanguageProvider, useLanguage } from './contexts/language-context';

const projectProps = [
  {
    images: ["/assets/chat-messages1.png"],
    title: 'Chat Messages',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt cumque, fuga similique consectetur maxime porro cum eveniet minima officiis culpa nostrum enim odit minus optio fugiat? Dignissimos quae autem ipsam.'
  },
  {
    images: ["/assets/ecommerce1.png", "/assets/ecommerce2.png"],
    title: 'Ecommerce',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt cumque, fuga similique consectetur maxime porro cum eveniet minima officiis culpa nostrum enim odit minus optio fugiat? Dignissimos quae autem ipsam.'
  }
]

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
        {projectProps.map((project) => {
          return(
            <Project images={project.images} description={project.description} title={project.title}  />
          )
        })}

      </div>
  );
}

export default App;
