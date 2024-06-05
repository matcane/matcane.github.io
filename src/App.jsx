import './i18n';
import { projectsData, projectsImg } from './data/projects'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Project } from './components/Project'
import { Contact } from './components/Contact'
import { Bio } from './components/Bio'

function App() {
  return (
        <>

          <section className="flex flex-col h-screen bg-default">
            <Nav />
            <Hero />
          </section>

          <section id='bio' className="flex flex-col items-center justify-center bg-primary h-screen p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 gap-y-8">
              <Bio />
          </section>

          <section id='projects' className="flex flex-col h-screen items-center gap-0 bg-default overflow-x-auto scrollbar lg:flex-row lg:overflow-x-auto">
            <Project data={projectsData[0]} img={projectsImg[0]} />
            <Project data={projectsData[1]} img={projectsImg[1]} />
            <Project data={projectsData[2]} img={projectsImg[2]} />
            <Project data={projectsData[3]} img={projectsImg[3]} />
            <Project data={projectsData[4]} img={projectsImg[4]} />
            <Project data={projectsData[5]} img={projectsImg[5]} />
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
