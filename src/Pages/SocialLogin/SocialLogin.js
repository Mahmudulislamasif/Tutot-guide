 import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
 
 const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
            if (error) {
                   errorElement= <p className='text-danger'>Error: {error?.message}</p>

            }
            if (loading) {
                return <p>Loading...</p>;
            }
            // if (user) {
            //     return (
            //     <div>
            //         <p>Signed In User: {user.email}</p>
            //     </div>
            //     );
            // }
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