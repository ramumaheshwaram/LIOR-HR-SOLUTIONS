import './App.css'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
