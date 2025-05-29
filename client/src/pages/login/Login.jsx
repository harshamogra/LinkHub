import React, { useContext, useRef } from 'react'
import HandshakeIcon from '@mui/icons-material/Handshake';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
function Login() {
    const email = useRef(); //here we can use useState.. but it will just increase the amount of rerender which is bad.. So useRef is better option here
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext)
    const handleClick = (e)=>{
        e.preventDefault();
        loginCall({email: email.current.value,password:password.current.value}, dispatch)
        console.log(user)
        
    }
    const navigate = useNavigate();

  return (
    <div className='h-svh w-svw bg-gray-200  flex items-center justify-center '>
        <div className="loginwrapper flex">
            <div className="loginleft flex-1 flex flex-col justify-center ">
                <h3 className="loginLogo text-blue-500 text-5xl tracking-tighter font-bold select-none">Link<HandshakeIcon/>Hub</h3>
                <span className="loginDesc text-xl tracking-tighter font-semibold">
                    Connect with friends and the world with LinkHub.
                </span>
            </div>
            <div className="loginright  flex flex-col flex-1 justify-center p-5">
                <form onSubmit={handleClick}>
                    <div className="loginbox h-72 p-6 flex flex-col bg-white rounded-md ">
                        <input placeholder='Email' type='email' className='text-xl mb-5 h-12 border border-gray-500 rounded-md p-3' ref={email}/>
                        <input placeholder='Password' type='password' className='text-xl mb-5 h-12 border-1px border border-gray-500 rounded-md p-3' ref={password}/>
                        <button className='mb-3 p-2 bg-blue-500 rounded-md border-none text-xl text-white cursor-pointer font-semibold tracking-tighter h-14 disabled:cursor-none' disabled={isFetching}>{isFetching ?<CircularProgress color='white' size="25px"/> :"Log In"}</button>
                        <span className='text-gray-600 mb-2 cursor-pointer'>Forgot Password?</span>
                        <button className=' bg-gray-300 h-12 cursor-pointer items-center border w-full border-gray-500 text-black tracking-tighter text-lg rounded-md' onClick={()=>{navigate('/register')}}>Create a New Account</button>   
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
