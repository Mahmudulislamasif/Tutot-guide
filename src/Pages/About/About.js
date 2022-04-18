import React from 'react';
import profile from './AboutImage/profile.png'
import './About.css'
const About = () => {
    return (
        <div className='container'>
            <h1>All About Me</h1>
         <div className='row g-4'>
              <div className='col-md-6'>
                <img className='w-75' src={profile} alt=''/>
              </div>
              <div className='col-md-6'>
                <div className='about-desc'>
                <h5>My Name is Mohammad Mahmudul Islam. I did my graduation In CSE from Chittagong University. Currently I am a student of Programming Hero Course. My Goal Is to develop my career as a web develop.To achieve this goal I am working hard. I have to work 4-5 hours to learn it effieciently.Besides, I am giving some job recruitment exams related to coding or other government Jobs.</h5>
                </div>
              </div>
           </div>
        </div>
    );
};

export default About;