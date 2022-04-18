 import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
 
 const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    let errorElement;
            if (error) {
                   errorElement= <p className='text-danger'>Error: {error?.message}</p>

            }
            if (loading) {
                return <p>Loading...</p>;
            }
            if (user) {
                navigate('/checkout')
            }
     return (
         <div>
              <div className='d-flex justify-content-center'>
                <p>--------------------------</p>
                <p className='ms-2 me-2'>Or</p>
                <p>-----------------------------</p>
            </div>
            {errorElement}
            <button className='btn-class' onClick={()=>signInWithGoogle()}>SignIn with Google</button>
         </div>
     );
 };
 
 export default SocialLogin;