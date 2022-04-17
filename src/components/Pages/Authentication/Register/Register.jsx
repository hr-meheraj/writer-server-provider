import React,{useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../../../firebase.config';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../Shared/LoadingSpinner';
function Register() {
    const [userInfo , setUserInfo]= useState({
        email : "",
        password : "" ,
        confirmPassword : ""
    });
    const [userInfoErr, setUserInfoErr]= useState({
        emailErr : "",
        passwordErr : "",
    })
    // Sign Up State 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createErr,
      ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });
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
    const handleConfirmPassword = (e) => {
        const pass = e.target.value;
        if(pass === userInfo.password){
            setUserInfo({ ...userInfo,  confirmPassword : e.target.value });
            setUserInfoErr({ ...userInfoErr, passwordErr: "" });
        }else{
            setUserInfoErr({...userInfoErr, passwordErr : "Password Not Match"});
            setUserInfo({...userInfo, confirmPassword : ""})
        }
    }
    const handleRegisterSubmit = e => {
        e.preventDefault();
        if(userInfo.email && userInfo.password === userInfo.confirmPassword){
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            console.log(user);
            toast(`I have send a verification link to you email Address :  , 
           Please Check out inbox, if you not found in inbox please check
         SPAM Folder. 
         Note : Until You have not verify you email you can't be login `, {duration : 6000})
         if(createErr?.code){   
            toast.success("SuccessFully Created")
         }
        }
        if(loading){
            return <LoadingSpinner/>
        }
    }
    // Navigate Previous Tab if user Registation
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    // useEffect(() => {
    //     if(user?.uid){
            
    //     toast(`I have send a verification link to you email Address : ${user?.email} , 
    //     Please Check out inbox, if you not found in inbox please check
    //     SPAM Folder. 
    //     Note : Until You have not verify you email you can't be login `, {duration : 6000})
    //     if(createErr?.code){   
    //         toast.success("SuccessFully Created")
    //     }
    //     }
    // },[user])
    useEffect(() => {
        const finalError = createErr;
        if(finalError){
            switch(finalError?.code){
                case "auth/invalid-email":
                    toast.error("Invalid email provided, please provide a valid email");
                    break;
                
                case "auth/email-already-exists":
                    toast.error("Email Already Exists");
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
    }, [createErr])
    return (
        <div className='bg-blue-800  h-screen w-full flex justify-center items-center'>
           <div className='bg-white rounded-md shadow-lg p-4'>
                <form onSubmit={handleRegisterSubmit} className='w-[310px] sm:w-[450px] md:w-[530px] '>
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
                    </div>
                    {
                      userInfoErr?.passwordErr && <p className='text-red-900 font-semibold pt-2'>{userInfoErr.passwordErr}</p>
                    }
                     <div className=''>
                        <label htmlFor='confirmPasword' className='w-full block font-bold py-[5px]'>Confirm Password:</label>
                        <input type='password' autoComplete="false" onChange={handleConfirmPassword} id='confirmPassword' required placeholder='Re-type your password' className=' py-2 px-4 text-[18px] block w-full border rounded-md shadow-lg ' />
                    </div>
                    <br/>
                    <p className='py-2 font-semibold'>Already have an Account? <Link to='/login' className='text-blue-800'>Login</Link></p> 
                    <button type='submit' className='btn-blue w-full hover:bg-blue-900'>REGISTER</button>
                </form>
           </div>
           <Toaster
           position="top-right"
           reverseOrder={false}
           />
        </div>
    )
}

export default Register
