import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>
    {
        fetch('tutor.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='container'>
           <h1>Services</h1>
           <div className='row g-4'>
           {
                services.map(service=><Service key={service.id} service={service}></Service>)
           }
           </div>
        </div>
    );
};

export default Services;