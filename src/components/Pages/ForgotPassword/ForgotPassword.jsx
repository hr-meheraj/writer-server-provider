import React,{useState} from 'react'
import {useSendPasswordResetEmail} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.config';
function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    const handleEmailChange = (e) => {
        const emailRegEx = /\S+@\S+\.\S+/;
        const validate = emailRegEx.test(e.target.value);
        if(validate){
            setEmail(e.target.value);
        }else{
            setEmail("");
        }
    }
    const handleForgotSubmit = (e) => {
        e.preventDefault();
        if(email){
            sendPasswordResetEmail(email);
        }
    }
    return (
        <div className='w-full h-screen'>
            <form onSubmit={handleForgotSubmit} className='max-w-10/12 md:w-[520px]'>
                <input type='email' required onChange={handleEmailChange} className='rounded-md shadow-lg py-2 px-4 font-semibold block w-full'/><br/>
                <input value="Reset Password" type='submit' className='btn-blue block w-full rounded-md shadow-lg' />
            </form>
        </div>
    )
}

export default ForgotPassword
