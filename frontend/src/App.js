import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './styles/app.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/founder.scss'
import './styles/menu.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/cart.scss'
import './styles/shipping.scss'
import Header from './components/Layout/Header'
import Home from './components/Home/Home'
import Footer from './components/Layout/Footer'
import Contact from './components/contact/Contact'
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'


const App = () => {
  return (
    <Router>
      <Header />
      {/* routes go here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App