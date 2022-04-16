import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
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
                   <Link className='link-class' to='/login'>Login</Link>
               </div>

            </div>
           </div>
        </div>
    );
};

export default Header;