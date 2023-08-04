import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './styles/app.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/founder.scss'
import './styles/menu.scss'
import './styles/footer.scss'
import Header from './components/Layout/Header'
import Home from './components/Home/Home'
import Footer from './components/Layout/Footer'


const App = () => {
  return (
    <Router>
      <Header />
      {/* routes go here */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App