import React from 'react'
import Footer from '../../Shared/Footer/Footer'

function AboutUs() {
    return (
        <>
        <div className='md:w-9/12 mx-auto w-11/12 py-[20px]'>
            <h1 className='text-center py-2 font-semibold text-green-800'>About </h1>
            <div className='p-4 shadow-lg rounded-md mt-[30px]'>
                <div className='flex justify-center py-2'>
                    <img src='https://i.ibb.co/mDXd46C/97170117.png' alt='me' className='w-[220px] h-[220px] rounded-full shadow-md'/>
                </div>
                <div>
                    <h2>Hr Meheraj </h2>
                    <p className='text-[18px]'><strong className='font-semibold mr-[10px] text-green-700'>My Goal : </strong> Hello Everybody I am Habibur Rahman Mehearaj. Currently I am Learning Proramming for my carrier As a High School Student I have to do lot of think, But My Goal might be change accrodting to the time. When I was in class Eight my Dream was Become a BCS Carde, But when I study At class Nine My Dream is Become a Programmar and Islamic Researcher. And Throught of this proccess I forward step by step every day every moment.This is the thing where I inspired in my carrier.</p>
                </div>
                <div className='flex justify-around py-[40px]'>
                    <a className='text-semibold bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 shadow-lg rounded-md transition-all' target="_blank" href='https://github.com/hr-meheraj'>GITHUB</a>
                    <a className='text-semibold bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 shadow-lg rounded-md transition-all' target="_blank" href='https://twitter.com/hrmeheraj'>TWITTER</a>
                    <a className='text-semibold bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 shadow-lg rounded-md transition-all' target="_blank" href='https://facebook.com/hr.meheraj.50'>FACEBOOK</a>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default AboutUs
