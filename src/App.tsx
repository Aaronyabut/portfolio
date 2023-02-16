import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Outro from './components/Outro'
import Email from './components/Email'
import ContactsMobile from './components/ContactsMobile'

export default function App() {
  return (
    <div className="h-full text-slate-800 bg-blueish mb-1 static">
      <NavBar />

        <div className="hidden md:block fixed bottom-0 left-4 bg-transparent w-16 h-fit">
          <Socials />
        </div>
        <div className="hidden md:block fixed bottom-0 right-4 bg-transparent w-16 h-fit">
          <Email />
        </div>
        <div className="grid place-content-center bg-blueish h-screen">
          <Introduction />
        </div>
        <div className="grid place-content-center bg-blueish h-fit py-28" id="aboutMe">
          <AboutMe />
        </div>
        <div className="grid place-content-center bg-blueish h-max pt-64 pb-20" id="projects">
          <Projects />
        </div>
        <div className="grid place-content-center bg-blueish h-fit pb-2 md:hidden ">
          <ContactsMobile />
        </div>


      <Outro />

    </div>
  )
}

/*
<h1>About Me</h1>
<h1>Projects</h1>
<h1>Socials</h1>
<h1>Contact Me</h1>
*/

/*
color: white;
color: #d2d3d0; text? whiteish
color: #3c3e48; blueish
color: #ff79c6; pink
color: #3d3244; purple
*/