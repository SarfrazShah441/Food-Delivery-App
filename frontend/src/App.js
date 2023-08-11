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
import './styles/confirmOrder.scss'
import './styles/paymentSuccess.scss'
import './styles/login.scss'
import './styles/profile.scss'
import './styles/table.scss'
import './styles/orderDetails.scss'
import Header from './components/Layout/Header'
import Home from './components/Home/Home'
import Footer from './components/Layout/Footer'
import Contact from './components/contact/Contact'
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import PaymentSuccess from './components/cart/PaymentSuccess'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import MyOrders from './components/myOrders/MyOrders'
import OrderDetails from "./components/myOrders/OrderDetails";
const App = () => {
  return (
    <Router>
      <Header isAuthenticated={true} />
      {/* routes go here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App