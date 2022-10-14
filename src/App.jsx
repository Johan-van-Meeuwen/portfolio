import { useState } from 'react'
import './App.css'
import Navbar from '/src/components/Navbar'
import Main from '/src/components/Main'
import Portfolio from '/src/components/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Portfolio />
    </div>
  )
}

export default App
