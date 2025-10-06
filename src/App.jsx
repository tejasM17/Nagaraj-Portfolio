import React from 'react'
import Home from './pages/Home'
import Header from './pages/Header'
import Projects from './pages/Projects'
import Skills from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>)
}

export default App
