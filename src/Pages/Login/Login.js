import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');
    const navigate=useNavigate()
    let errorElement;
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    if(error)
    {
      errorElement=<p className='text-danger'>{error?.message}</p>
    }
    if(user)
    {
     navigate('/home')
    }
    const handleEmail=(event)=>
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
      signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-form'>
        <h1>Login</h1>
        <form onSubmit={handleLogIn}>
            <input onBlur={handleEmail}  type="email" name="email" placeholder='email'/>
            <input onBlur={handlePassword}  type="password" name="password" placeholder="password"/>
            {errorElement}
            <p>New to here? <Link to='/signUp'>signUp</Link></p>
            <button>Login</button>
        </form>
        </div>
    );
};

export default Login;