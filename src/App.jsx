
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import {useState} from "react"
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import SingleItem from './Singlepage.jsx';
import Cart from './Cart.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <h1>FalsEyes</h1>

      <div id="navbar">
          <box id='link'><Link to='/'>Home</Link></box>
          <box id='link'><Link id='link'to='/login'>Login</Link></box>
          <box id='link'><Link id='link'to='/register'>Register</Link></box>
          <box id='link'><Link id='link'to='/cart'>Cart</Link></box>
       </div>
      <div id="main-section">
        <Routes>  
          <Route path='/' element={<Home/>} />
          {/* <Route path='/item/:id' element={<SinglePage/>}/>  */}
          {/* pass isLoggedIn status into <Login/>  */}
          <Route path='/login' element={<Login/>}/>  
          <Route path='/register' element={<Register/>}/>
          <Route path="/:id" element={<SingleItem />} /> 
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  )
}

export default App
