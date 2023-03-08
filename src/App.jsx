import React from 'react';
import Initials from './components/initials/initials';
import Description from './components/description/description';
import Dark from './components/dark/dark';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';



const App = () => {
  return (
    <>
      <Initials />
      <Description />
      <Dark />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
