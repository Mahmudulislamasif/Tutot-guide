import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
    const [user]=useAuthState(auth)
    const handleSignOut=()=>
    {
        signOut(auth)
    }
    return (
        <div>
           <div className='bg-color'>
           <div className='row g-4'>
               <div className='col-md-1'>
                   <Link className='link-class' to='/home'>Home</Link>
               </div>
               <div className='col-md-1'>
                   <Link className='link-class' to='/blogs'>Blogs</Link>
               </div>
               <div className='col-md-1'>
                   <Link className='link-class' to='/about'>About</Link>
               </div>
               <div className='col-md-1 ms-auto'>
                   {
                       user? <Link className='link-class' onClick={handleSignOut} to='/login'>Signout</Link>:
                       <Link className='link-class' to='/login'>Login</Link>
                   }
               </div>

            </div>
           </div>
        </div>
    );
};

export default Header;