import React from 'react'
import HandshakeIcon from '@mui/icons-material/Handshake';
function Login() {
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
                <div className="loginbox h-72 p-6 flex flex-col bg-white rounded-md ">
                    <input placeholder='Email' className='text-xl mb-5 h-12 border border-gray-500 rounded-md p-3'/>
                    <input placeholder='Password' className='text-xl mb-5 h-12 border-1px border border-gray-500 rounded-md p-3'/>
                    <button className='mb-3 bg-blue-500 rounded-md border-none text-xl text-white cursor-pointer font-semibold tracking-tighter h-14'>Log In</button>
                    <span className='text-gray-600 mb-2 cursor-pointer'>Forgot Password?</span>
                    <button className=' bg-gray-300 h-12 cursor-pointer items-center border w-full border-gray-500 text-black tracking-tighter text-lg rounded-md'>Create a New Account</button>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
