import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './logo.png'
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <footer className='bg-[#112222] mt-[50px] pt-[40px]'>
          <div className='container text-white mx-auto'>
              <div className='grid grid-cols-1 gap-[30px] md:grid-cols-2'>
                  <div className='p-2'>
                    <img className='max-w-full w-[250px] ' src={Logo} alt="Logo footer" />
                    <br/>
                    <p className=''>Internationally my clients give me some suggesion about specefic write. I have write most of the book are in 1954-2022. That's why I have gained more experience.</p>
                  </div>
                  <div>
                      <h2 className='text-center font-semibold'>Subscribe </h2>
                      <form className='flex mt-[15px]' onSubmit={(e) => {
                          e.preventDefault();
                          alert('thaks for subbmit');
                      }}>
                          <input type='email' className='w-7/12 py-2 px-4 rounded bg-white shadow-lg text-black' placeholder='enter your email' required/><br/>
                          <br/>
                          <input type='submit' value='Subscribe ' className='rounded-lgw-5/12 bg-[#112233ea] py-2 px-4 shadow-lg'/>
                      </form>
                  </div>
              </div>
            <p className='py-2 mt-[40px] text-center text-gray-300 '>&copy; {year} All right reserved by Hr Meheraj</p>
          </div>
      </footer>
    )
}

export default Footer
