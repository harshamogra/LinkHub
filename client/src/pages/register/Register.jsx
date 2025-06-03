import React, { useRef } from 'react'
import HandshakeIcon from '@mui/icons-material/Handshake';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {
    const username = useRef(); //here we can use useState.. but it will just increase the amount of rerender which is bad.. So useRef is better option here
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate(); //useHistory is not used anymore

    const handleClick = async(e)=>{
        e.preventDefault();
        if(passwordAgain.current.value!=password.current.value){
            password.current.setCustomValidity("Passwords don't match")
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                const res = await axios.post('/api/auth/register',user)
                navigate('/login');
                
            } catch (err) {
                console.log(err)
            }
        }    
    }

  return (
    <div className='h-svh w-svw bg-gray-200  flex items-center justify-center '>
        <div className="loginwrapper flex">
            <div className="loginleft flex-1 flex flex-col justify-center ">
                <h3 className="loginLogo text-blue-500 text-5xl tracking-tighter font-bold select-none">Link<HandshakeIcon/>Hub</h3>
                <span className="loginDesc text-xl tracking-tighter font-semibold">
                    Connect with friends and the world with LinkHub.
                </span>
            </div>
            <form className="loginright  flex flex-col flex-1 justify-center p-5" onSubmit={handleClick}>
                <div className="loginbox h-96 w-96 p-6 flex flex-col bg-white rounded-md ">
                    <input placeholder='Username' required ref={username} className='text-xl mb-5 h-12 border border-gray-500 rounded-md p-3'/>
                    <input placeholder='Email' required ref={email} className='text-xl mb-5 h-12 border border-gray-500 rounded-md p-3'/>
                    <input placeholder='Password' required ref={password} minLength='6' type='password' className='text-xl mb-5 h-12 border-1px border border-gray-500 rounded-md p-3'/>
                    <input placeholder='Retype Password' required ref={passwordAgain} type='password' className='text-xl mb-5 h-12 border-1px border border-gray-500 rounded-md p-3'/>
                    <button className='mb-3 bg-blue-500 rounded-md border-none text-xl text-white cursor-pointer font-semibold tracking-tighter h-14' type='submit'>Sign Up</button> 
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register
