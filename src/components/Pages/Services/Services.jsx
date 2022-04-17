import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch'
import LoadingSpinner from '../../Shared/LoadingSpinner';

function Services() {
    const { data, loading, err } = useFetch('services.json');
    if (err) {
        return alert("hello there");
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-center font-bold py-4'> Services </h2><br />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
                {
                    loading ? <LoadingSpinner /> : (
                        data && data?.map((eachData) => <ServiceData key={eachData.price} data={eachData} />)
                    )
                }

            </div>
        </div>
    )
}

const ServiceData = ({ data }) => {
    const { name, price, info, description, imgURL } = data;
    const handleProductNavigate = (data) => {
      
    }
    return (
        <div className='p-2 m-2 service-card relative'>
            <img src={imgURL} alt={name} className='max-w-full mx-auto h-[250px]' />
            <h3 className='text-2xl font-semibold text-blue-800 py-2 text-center'>{name}</h3><br />
            <p className='py-2 px-4 text-center font-xl'><strong className='text-bold text-blue-800'>Info:</strong> {description}</p>
            <hr />
            <ul className='list-disc px-6 py-2'>
                {
                    info?.map(eachInfo => {
                        return (
                            <li>{eachInfo}</li>
                        )
                    })
                }
            </ul>
            <p className='font-semibold text-7xl text-center py-4'>${price}</p>
            <Link to='/checkout'> <button onClick={() => handleProductNavigate(data)} className='btn-blue w-full absolue left-0 right-0 hover:bg-blue-900 transition-all flex justify-center items-center gap-[15px]'><span>Buy Now</span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg></span></button> </Link>
        </div>
    )
};

export default Services;
