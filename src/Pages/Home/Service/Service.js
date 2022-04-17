
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {name,image,description,price}=props.service;
    const navigate=useNavigate()
    const showDetails=()=>
    {
      navigate('/checkout')
    }
    return (
        <div className='col-md-4'>
            <div className='shadow-lg p-3'>
              <img className='w-75' src={image} alt=''/>
              <h5>{name}</h5>
              <p className='description-class'>{description}</p>
              <p className='description-class'>{price}</p>
              <Link to='/checkout'>CheckOut</Link>
            </div>
        </div>
    );
};

export default Service;