import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    let errorElement;
    const navigate=useNavigate('')
  
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    
    const handleEmail =(event)=>
    {
        setEmail(event.target.value)
    }
    const handlePassword=(event)=>
    {
      setPassword(event.target.value)
    }
    const handleLogIn=(event)=>
    {
        event.preventDefault();
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div className='login-form'>
        <h1>Login</h1>
        <form onSubmit={handleLogIn}>
            <input onBlur={handleEmail} type="email" name='email' placeholder='email'/>
            <div>
              <input onBlur={handlePassword} type="password" name="password" placeholder="password"/>
            </div>
            {
              error&& <p className='text-danger'>{error?.message}</p>
            } 
            <p>New to here? <Link to='/signUp'>signUp</Link></p>
            <button>Login</button>
        </form>
        </div>
    );
};

export default Login;