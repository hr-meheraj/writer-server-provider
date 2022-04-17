import React,{useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../../../firebase.config';
import { useSignInWithEmailAndPassword , useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../Shared/LoadingSpinner';
function Login() {
    const [userInfo , setUserInfo]= useState({
        email : "",
        password : "" 
    });
    const [userInfoErr, setUserInfoErr]= useState({
        emailErr : "",
        passwordErr : ""
    })
    // Sign Up State 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        emailErr,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, googleUser, googleLoading, googleErr] = useSignInWithGoogle(auth);
    const handleEmailChange = (e) => {
        const emailRegEx = /\S+@\S+\.\S+/;
        const validate = emailRegEx.test(e.target.value);
        if(validate){
            setUserInfo({...userInfo, email : e.target.value});
            setUserInfoErr({...userInfoErr, emailErr : ""});
        }else{
            setUserInfoErr({...userInfoErr, emailErr : "Your Email is not Valid" });
            setUserInfo({...userInfo, email : ""})
        }
    }
    const handlePasswordChange = e => {
        const passwordRegEx =  /.{6,}/;
        const validatePass = passwordRegEx.test(e.target.value);
        if(validatePass){
            setUserInfo({...userInfo, password : e.target.value});
            setUserInfoErr({...userInfoErr, passwordErr : ""});
        }else{
            setUserInfoErr({...userInfoErr, passwordErr : "Your must have to be 6 characters"});
            setUserInfo({...userInfo , password : ""});
        }
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        // console.log(userInfo.email, userInfo.password);
       
            if(userInfo.email && userInfo.password){
                signInWithEmailAndPassword(userInfo.email , userInfo.password)
                .then( () =>{
                    if(emailErr?.code && googleErr?.code ){   
                        toast.success("SuccessFully Login")
                    }else{
                    }
                });
            }
        
        if(loading){
            return <LoadingSpinner/>
        }
    }

    const handleGoogleLogin = () => {
        signInWithGoogle();
        if(googleLoading){
            return <LoadingSpinner/>
        }
    }

    const handleForgotPassword = () => {
        
    }
    // Navigate Previous Tab if user Login 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    useEffect(() => {
        if(googleUser){
            navigate(from);
        }
    },[googleUser])


    useEffect(() => {
        const finalError = emailErr|| googleErr;
        if(finalError){
            switch(finalError?.code){
                case "auth/invalid-email":
                    toast.error("Invalid email provided, please provide a valid email");
                    break;
                
                case "auth/invalid-password":
                    toast.error("Wrong password. Intruder!!")
                    break;
                
                case "auth/user-not-found" : 
                    toast.error("User Not found Please Create New");
                    break;

                case "auth/wrong-password" : 
                    toast.error("Password is not match");
                    break;

                default:
                    toast.error("something went wrong")
            }
        }
    }, [emailErr, googleErr])
    return (
        <div className='bg-blue-800  h-screen w-full flex justify-center items-center'>
           <div className='bg-white rounded-md shadow-lg p-4'>
                <form onSubmit={handleLoginSubmit} className='w-[310px] sm:w-[450px] md:w-[530px] '>
                    <div className=''>
                        <label htmlFor='email' className=' block font-bold py-[5px] w-full'>Email:</label>
                        <input type='email' autoComplete='false' onChange={handleEmailChange} id='email' required placeholder='enter your email 'className='py-2 px-4 text-[18px] border block w-full  rounded-md shadow-lg' />
                        
                    </div>
                    {
                        userInfoErr?.emailErr && <p className='text-red-900 font-semibold pt-2'>{userInfoErr.emailErr}</p>
                    }
                    <br/>
                    <div className=''>
                        <label htmlFor='password' className='w-full block font-bold py-[5px]'>Password:</label>
                        <input type='password' autoComplete="false" onChange={handlePasswordChange} id='password' required placeholder='Enter your password' className=' py-2 px-4 text-[18px] block w-full border rounded-md shadow-lg ' />
                        <p className='text-blue-800 font-semibold py-2 cursor-pointer transition-all hover:text-blue-900' onClick={handleForgotPassword}>Forgot Your Password</p>
                    </div>
                    {
                      userInfoErr?.passwordErr && <p className='text-red-900 font-semibold pt-2'>{userInfoErr.passwordErr}</p>
                    }
                    <br/>
                    <p className='py-2 font-semibold'>Don't have an account ? <Link to='/register' className='text-blue-800'>Create new</Link></p> 
                    <button type='submit' className='btn-blue w-full hover:bg-blue-900'>LOGIN</button>
                    <div className='flex mt-[20px] px-4 mb-[10px] justify-center items-center '>
                        <div className='w-[40%] h-[2px] bg-gray-400'></div>
                        <div  clasName='w-[20%] text-center '><span className='p-[10px]'>OR</span></div>
                        <div className='w-[40%] h-[2px] bg-gray-400'></div>
                    </div>
                </form>
                <button className="shadow-lg rounded-md w-full py-2 text-center m-2" onClick={handleGoogleLogin}>LOGIN WITH GOOGLE</button>
           </div>
           <Toaster
           position="top-right"
           reverseOrder={false}
           />
        </div>
    )
}

export default Login
