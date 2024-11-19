import { Routes,Route  } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Placeorder from './components/Placeorder'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeorder' element={<Placeorder/>} />
        <Route path='' element />
      </Routes>

    </div>
    
  )
}

export default App
