import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='login-form'>
        <h1>SignUp</h1>
        <form>
            <input type="email" name='email' placeholder='email'/>
            <input type="password" name="password" placeholder="password"/>
            <input type="password" name="password" placeholder="Confirm Password"/>
            <p>New to here? <Link to='/login'>signUp</Link></p>
            <button>SignUp</button>
            <button>Login with Google</button>
        </form>
        </div>
    );
};

export default SignUp;