
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Cart from './pages/Cart'

function App() {
 
  return (
    <>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/wishlist' element={<Wishlist/>}/>
 <Route path='/cart' element={<Cart/>}/>
  <Route path='/view/:id' element={<View/>}/>  //: it is given to identify it as parameter
  <Route path='/*' element={<Navigate to={'/'}/>}/>  //
</Routes>
<Footer/>
    </>
  )
}

export default App
