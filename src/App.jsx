import { useState } from 'react'
import './App.css'
import Test from './components/Test';
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/Test" element={<Test/>} />
      </Routes>
    </Router>
  )
}

export default App
