import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
import Project from './components/Project'
import Contact from './components/Contact'



function App() {
  

  return (
    <div className='overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900'>  
    <div className='fixed top-0 w-full h-full -z-10'>
    <div className="relative w-full h-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
    </div>

      <div className='container px-8 mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Project/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
