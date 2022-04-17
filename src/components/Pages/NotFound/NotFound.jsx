import React from 'react'
import notFound from './notFound.png'
import {Link} from 'react-router-dom'
function NotFound() {
    return (
        <div className='flex justify-center items-center '>
           <div>
               <img src={notFound} alt="Not Found" className='w-[300px] md:w-[380px] mg:-w-[430px] py-4'/>
                <Link className='text-center p-2 block hover:text-blue-900 font-semibold text=[22px]' to='/'>Back to the Home &larr; </Link>
           </div>
        </div>
    )
}

export default NotFound
