import { useState } from 'react'
import './i18n';
import projects from './data/projects.json'
import duckCheck from './assets/duckCheck.png'
import schronisko from './assets/schronisko.png'
import collaboraWave from './assets/collaboraWave.png'
import quickDeck from './assets/quickDeck.png'
import metin2Sim from './assets/metin2Sim.png'
import chatbot from './assets/chatbot.png'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Project } from './components/Project'
import { Contact } from './components/Contact'
import { Bio } from './components/Bio'

function App() {
  const [ projectIndex, setProjectIndex ] = useState(0);
  

  const handleLeft = () => {
    setProjectIndex(prev => {
      if (prev >= 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };
  
  const handleRight = () => {
    setProjectIndex(prev => {
      if (prev < 5) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };
  
  return (
        <>

          <section className="flex flex-col h-screen bg-default">
            <Nav />
            <Hero />
          </section>

          <section id='bio' className="flex flex-col items-center justify-center bg-primary h-screen p-4 gap-y-20">
              <Bio />
          </section>

          <section id='projects' className="flex flex-col h-screen items-center gap-0 bg-default overflow-x-auto no-scrollbar lg:flex-row lg:overflow-x-hidden">
            <Project id={0} data={projects['quickDeck']} img={quickDeck} />
            <Project id={1} data={projects['collaboraWave']} img={collaboraWave} />
            <Project id={2} data={projects['metin2Sim']} img={metin2Sim} />
            <Project id={3} data={projects['schronisko']} img={schronisko} />
            <Project id={4} data={projects['duck_check']} img={duckCheck} />
            <Project id={5} data={projects['chatbot']} img={chatbot} />
            <a href={'#' + projectIndex} className='hidden absolute items-center left-0 h-1/3 text-white lg:flex' onClick={handleLeft}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={'#' + projectIndex} className='hidden absolute items-center right-0 h-1/3 text-white lg:flex' onClick={handleRight}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </a>
          </section>

          <hr className='border-2 border-primary'></hr>
          
          <footer className='flex flex-col justify-center h-32 gap-y-4 items-center bg-default text-primary'>
            <Contact />
            <p>Laskowski Mateusz | 2024</p>
          </footer>

        </>
  )
}

export default App
