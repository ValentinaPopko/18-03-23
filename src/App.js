import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from './components/header/Header.js';
import './App.css';
import Slider from './components/main/Slider.js';
import AllCards from './components/main/AllCards.js';
import Cart from './components/main/Cart/cart.js';
import { Route, Routes } from 'react-router-dom';
import Fav from './components/main/Fav.js';
import Profile from './components/main/Profile.js';


function App() {

  const [openCart, SetOpenCart] = useState(false)



    return <div>
      <Cart openCart={openCart} onCloseCart={() => SetOpenCart (false)} />
      <Header onOpenCart={() => SetOpenCart (true)}/>

      <Routes>
        <Route path='/'element={<><Slider /> <AllCards /></>}></Route>
        <Route path='/Fav'element={<><Fav /></>}></Route>
        <Route path='/Profile'element={<><Profile /></>}></Route>
      </Routes>
      
      

    </div>
  }

export default App


