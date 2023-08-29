
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home.jsx'
import Login from './Login.jsx'
// import SinglePage from './SinglePage.jsx'

function App() {

  return (
    <>
      <div id="navbar">
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/cart'>Cart</Link>
       </div>
      <div id="main-section">
        <h1>Enjoy your shopping experience!</h1>
        <Routes>  
          <Route path='/' element={<Home/>} />
          {/* <Route path='/item/:id' element={<SinglePage/>}/>  */}
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
