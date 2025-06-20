import './App.css'
import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './pages/home/Home'
import About from './pages/About'
import Features from './pages/features/Features'
import Pricing from './pages/pricing/Pricing'

// TODO: Use <header> <main> <footer>
// TODO: Add Footer

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
