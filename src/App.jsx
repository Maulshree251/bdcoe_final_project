import { Routes,Route  } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/navbar/Navbar'
import Cart from './components/Cart/Cart'
import Placeorder from './components/Placeorder'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/Login-popup/loginPopup'

function App() {
    const[showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className="app">
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="" element />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App
