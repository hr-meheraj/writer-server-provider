import React from 'react'
import { useNavigate } from 'react-router-dom'

function Banner() {
    const navigate = useNavigate();
    return (
       <div className='contianer mx-auto'>
            <div className='w-full text-center md:py-[80px] py-[80px] '>
           <div className='w-full md:w-9/12 mx-auto'>
            <h1 className='font-bold text-3xl md:text-5xl'> Powerful and Optimazable Content</h1>
            <br/>
            <p className='px-2 md:px-0'>If you wanna get the<span className='font-semibold  text-green-800'> most useable </span> and  <span className='font-semibold text-green-800'>readble simple content </span>, you can take use. We are going to help you until your content user readable </p>
            <br/>
            <div className='flex justify-center gap-[30px]'>
                <button className='btn-blue' onClick={() => navigate('/services')}>Services</button>
                <button className='bg-white shadow-md py-2 px-4 font-semibold text-black rounded-full' onClick={() => navigate("/register")}>Registation</button>
            </div>
           </div>

        </div>
       </div>

    )
}

export default Banner
