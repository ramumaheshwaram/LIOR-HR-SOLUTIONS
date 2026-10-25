import './App.css'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Services } from './pages/Services'

import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />


      </Routes>

    </>
  )
}

export default App
