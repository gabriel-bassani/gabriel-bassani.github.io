import React from 'react';
import './App.css';
import { Project } from './components/project';
import { TechnologiesSection } from './components/technologies-section';

function App() {

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


  return (
    <div className="App">
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
