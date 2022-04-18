import React from 'react';
import Support from './FacilitiesImage/Support.jpg'
import Documentation from './FacilitiesImage/Documentation.jpg'
import HomeWork from './FacilitiesImage/Homework.jpg'
const Facilities = () => {
    return (
        <div>
            <h1 className='m-3'>Extra Facilities</h1>
            <div className='container'>
            <div className='row g-4'>
                <div className='col-md-4'>
                   <div className='shadow-lg p-3'>
                      <img src={Support} alt=''></img>
                      <h4>Extra Support</h4>
                   </div>
                </div>
                <div className='col-md-4'>
                    <div className='shadow-lg p-3'>
                     <img src={Documentation} alt=''></img>
                     <h4>Provides Lecture Sheets</h4>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='shadow-lg p-3'>
                     <img src={HomeWork} alt=''></img>
                     <h4>Take Away HomeWork</h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Facilities;