
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {name,image,description,price,id}=props.service;
    const navigate=useNavigate()
    const showCheckOut=()=>
    {
      navigate('/service/'+id)
    }
    return (
        <div className='col-md-4'>
            <div className='shadow-lg p-3'>
              <img className='w-75' src={image} alt=''/>
              <h5>{name}</h5>
              <p className='description-class'>{description}</p>
              <p className='description-class'>{price}</p>
              <button onClick={showCheckOut}>Checkout</button>
            </div>
        </div>
    );
};

export default Service;