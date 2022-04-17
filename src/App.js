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
import ForgotPassword from './components/Pages/ForgotPassword/ForgotPassword';
import { createContext, useState } from 'react';
// export const ServicesContext = createContext();
function App() {
    //const [products, setProducts] = useState([]);
  return (
    <>
        <Nav/> 
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/checkout' element={<RequireAuth><Services/></RequireAuth>}/>
            <Route path='/checkout/:productId' element={<RequireAuth><Checkout/></RequireAuth>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/reset-password' element={<ForgotPassword/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes> 
    </>
  );
}

export default App;
