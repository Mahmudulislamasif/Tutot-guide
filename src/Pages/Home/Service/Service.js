
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {name,image,description,price}=props.service;
    
    return (
        <div className='col-md-4'>
            <div className='shadow-lg p-3'>
              <img className='w-75' src={image} alt=''/>
              <h5>{name}</h5>
              <div className='details-class'>
              <p className='description-class'>{description}</p>
              <h6 className='mb-2'>Price:{price}tk</h6>
              <button className='check-button'><Link className='link-class-check'  to='/checkout'>CheckOut</Link></button>
              </div>

            </div>
        </div>
    );
};

export default Service;