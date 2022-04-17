import React from 'react'
import Footer from '../../Shared/Footer/Footer'

function Blogs() {
    return (
        <>
        <div className='container mx-auto w-11/12 py-[20px] qna-container'>
            <h1 className='text-center text-2xl md:font-5xl py-4 text-blue-900 font-semibold'>Questions and Answers </h1>
            
            <div className='py-2'>
                <p className='text-3xl font-normal'> <strong className="font-semibold">Question: </strong>What is the different between Authrorized and Authentication? </p><br/>
                <p className='text[17px] justify'> <strong className='font-semibold'>Answer:</strong>Authentication is the Process of Verifying Someone is, and the Authorizeation is the process of verifying authenticated use accessable thing. Like a user a Registration our website by using Google - this is the <span className='text-green-700 font-semibold'>Authentication</span>. And If the user cann't buy our course then he can't access our course. When the user buy our course then user can access private things. And that's called the <span className='text-green-700 font-semibold'>Authorization</span> </p><br/><br/>
            </div>

            <div className='py-2'>
                <p className='text-3xl font-normal'> <strong className="font-semibold">Question:</strong> Why are you using firebase? What other options do you have to implement authentication? </p><br/>
                <p className='justify'> <strong className='font-semibold'>Answer:</strong>Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase. </p><br/>
                <p className='text-xl'>Options of Authentication</p>
                <div className=''>
                    <ul className='pl-[20px] list-disc'>
                        <li>Email with Password</li> 
                        <li>Google/ Facebook and Social Apps</li>
                        <li>Phone Number </li>
                        <li>Annonymous (Not Best)</li>
                    </ul>
                </div>
                <br/> <br/>
            </div>

            <div className='py-2'>
                <p className='text-3xl font-normal'> <strong className="font-semibold">Question:</strong>What is the different between Authrorized and Authentication? </p><br/>
                <p className=''> <strong className='font-semibold'>Answer:</strong>What other services does firebase provide other than authentication</p>
                <br/>
                <div>
                    <p> Firebase Provides So many option for us :  </p> 
                    <ul className='list-disc pl-[20px]'>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Realtime Database</li>
                        <li>Storage</li>
                        <li>Machine Learning</li>
                        <li>etc.</li>
                    </ul>
                </div>
                <br/><br/>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}

export default Blogs
