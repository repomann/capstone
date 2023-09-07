
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import SingleItem from './Singlepage.jsx';

function App() {

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
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/:id" element={<SingleItem />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
