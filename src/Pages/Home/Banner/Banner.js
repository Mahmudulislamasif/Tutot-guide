import React from 'react';
import banner from '../images/banner.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <img className='container image-class' src={banner} alt=''/>
        </div>
    );
};

export default Banner;