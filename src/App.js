import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Header/Nav/Nav';
import Home from './components/Pages/Home/Home';
import Blogs from './components/Pages/Blogs/Blogs';
import Checkout from './components/Pages/Checkout/Checkout';
import Register from './components/Pages/Authentication/Register/Register';
import Services from './components/Pages/Services/Services';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import NotFound from './components/Pages/NotFound/NotFound';
import Login from './components/Pages/Authentication/Login/Login';
import RequireAuth from './components/Pages/Authentication/RequireAuth/RequireAuth';
function App() {
  return (
    <div>
        <Nav/> 
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/checkout' element={<RequireAuth><Checkout/></RequireAuth>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes> 
    </div>
  );
}

export default App;
