import React,{useState, useEffect, useContext} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import Footer from '../../Shared/Footer/Footer';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import toast, { Toaster } from 'react-hot-toast';

function Checkout() {
    const {productId} = useParams();
    // const {data, loading} = useFetch();
    const data = [{name : "Book Write", price : 6000}, {name : "Article Writer", price : 300}, { name : "Research Journal", price : 1200}];
    const main = data[productId - 1];
    const {price, name} = main;
    console.log(price, name);
    const navigate = useNavigate();
    const handleCheckoutSubmit = e => {
        e.preventDefault();
        toast.success("Thanks for Take this Services!");
        setTimeout(() => {
            navigate("/");
        },5000);
    }
    return (
        <>
        <div className='flex justify-center mt-[50px] max-w-[720px] w-11/12 mx-auto'>
         <div>
            <h2 className='font-semibold text-blue-900 text-center'>CHECKOUT DETAILS : </h2>
            <form onSubmit={handleCheckoutSubmit}>
                <h3>You Product Name : <span className='font-bold text-blue-900'>{name}</span></h3>
                <h2>Price : <span className='font-bold text-blue-900'>${price}</span></h2>
                <div>
                    <input type="email" required placeholder='enter your email' className='w-full rounded-md shadow-lg block py-2 px-4 font-semibold focus:ring-2 focus:ring-blue-500 foucs:border-none'/><br/>
                    <textarea name="" id="" cols="30" rows="10" className='block w-full rounded-md shadow-lg mt-2 px-4 py-2' placeholder='enter your details Information'></textarea>
                </div>
                
           <Toaster
           position="top-right"
           reverseOrder={false}
           />
                <button className='mb-[140px] py-2 text-center w-full rounded-md bg-blue-700 hover:bg-blue-900 cursor-pointer text-white transition-all mt-[20px] shadow-lg rounded-md'>Proccess Checkout with Stripe</button>
            </form>
         </div>
        </div>
        <Footer/>
        </>
    )
}

export default Checkout
