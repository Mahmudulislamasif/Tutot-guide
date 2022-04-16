import React from 'react';

const Service = (props) => {
    const {name,image}=props.service;
    return (
        <div className='col-md-4'>
            <div className='shadow-lg p-3'>
              <img className='w-75' src={image} alt=''/>
              <h5>{name}</h5>
            </div>
        </div>
    );
};

export default Service;