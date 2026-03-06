import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/resume'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Resume />
    </>
  )
}

export default App
