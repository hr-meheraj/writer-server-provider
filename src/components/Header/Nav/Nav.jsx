import React from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import './Nav.css'
import { useState } from 'react'
import Logo from './logo.png'
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.config'
import LoadingSpinner from '../../Shared/LoadingSpinner'
import { signOut } from 'firebase/auth'
function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    if(loading){
        return <LoadingSpinner/>
    }
    return (
        <>
            <nav className='px-[25px] bg-[#162222] text-white flex justify-between items-center shadow-md '>
                <div><Link to='/'><img src={Logo} className='w-[220px]' alt="Nav Logo" /></Link></div>
                <div className='block z-[100] md:hidden cursor-pointer hover:text-[#00fff0] transition-all' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        )}
                </div>

                <div className={` z-[50] gap-[25px] md:static right-0 left-0 z-[50] transition-all justify-center flex  md:flex-row  items-center
                   ${isOpen ? " absolute top-0 bottom-0  gap-[30px]   bg-[#012333de]  flex-col w-full h-screen " : " absolute top-[-990px]"}`}>
                    <div className={`flex gap-[15px]  ${isOpen && " flex flex-col gap-[20px] text-[25px] "}`}>
                        <NavLink className='hover:text-[#0ffada]   ' style={({ isActive }) =>isActive ? {color:'#0ffada',fontWeight:"500"} : undefined} onClick={() => setIsOpen(false)} onClick={() => setIsOpen(false)} to='/'>Getting Started</NavLink>
                        <NavLink className='hover:text-[#0ffada]   ' style={({ isActive }) =>isActive ? {color:'#0ffada',fontWeight:"500"} : undefined} onClick={() => setIsOpen(false)} onClick={() => setIsOpen(false)} to='/checkout'>Checkout</NavLink>
                        <NavLink className='hover:text-[#0ffada]   ' style={({ isActive }) =>isActive ? {color:'#0ffada',fontWeight:"500"} : undefined} onClick={() => setIsOpen(false)} onClick={() => setIsOpen(false)} to='/blogs'>Blogs</NavLink>
                        <NavLink className='hover:text-[#0ffada]   ' style={({ isActive }) =>isActive ? {color:'#0ffada',fontWeight:"500"} : undefined} onClick={() => setIsOpen(false)} onClick={() => setIsOpen(false)} to='/about-us'> About us </NavLink>
                    </div>
                    <div>
                        {
                            user?.uid ?  <button className='btn-blue' onClick={() => signOut(auth)}>Log Out</button>: (<button 
                                className='py-2 px-4 bg-blue-800 text-white rounded-md shadow-sm  hover:bg-blue-900 transition-all'
                               onClick={() => {
                                setIsOpen(false);
                                navigate('/login')
                            }}>Login </button>)

                        }
                    </div>
                </div>
            </nav>

        </>
    );

}

export default Nav
