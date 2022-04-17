import React,{ useState }  from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'
const SignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [errorMatch,setErrorMatch]=useState('')
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const handleEmail =(event)=>
    {
        setEmail(event.target.value)
    }
    const handlePassword=(event)=>
    {
      setPassword(event.target.value)
    }
    const handleConfirmPassword=(event)=>
    {
       setConfirmPassword(event.target.value)
    }
    const signUpNewUser =(event)=>
    {
        event.preventDefault()
        if(confirmPassword!==password)
        { 
            setErrorMatch('Password and Confirm Password Not Match')
            return;
        }
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='login-form'>
        <h1>SignUp</h1>
        <form onSubmit={signUpNewUser}>
            <input onBlur={handleEmail} type="email" name='email' placeholder='email'/>
            <input onBlur={handlePassword}  type="password" name="password" placeholder="password"/>
            <input onBlur={handleConfirmPassword} type="password" name="password" placeholder="Confirm Password"/>
            {
                errorMatch? <p className='text-danger'>{errorMatch}</p>:
                <p className='text-danger'>{error?.message}</p>
            }
            <p>New to here? <Link to='/login'>Login</Link></p>
            <button>SignUp</button>
            <button>Login with Google</button>
        </form>
        </div>
    );
};

export default SignUp;