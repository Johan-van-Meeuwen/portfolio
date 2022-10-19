import { useState } from 'react'
import './App.css'
import Navbar from '/src/components/Navbar'
import Main from '/src/components/Main'
import ProjectSection from '/src/components/ProjectSection'
import SkillSection from '/src/components/SkillSection'
import ContactForm from '/src/components/ContactForm'
import Footer from '/src/components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <ProjectSection />
      <SkillSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
