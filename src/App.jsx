import { useState } from 'react'
import './App.css'
import Navbar from '/src/components/Navbar'
import Main from '/src/components/Main'
import ProjectSection from '/src/components/ProjectSection'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <ProjectSection />
    </div>
  )
}

export default App
