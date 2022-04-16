import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='login-form'>
        <h1>Login</h1>
        <form>
            <input type="email" name='email' placeholder='email'/>
            <div>
              <input type="password" name="password" placeholder="password"/>
            </div>
            <p>New to here? <Link to='/signUp'>signUp</Link></p>
            <button>Login</button>
        </form>
        </div>
    );
};

export default Login;