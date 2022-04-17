import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container'>
           <div className='row g-4'>
              <div className='col-md-6'>
               <div className='blogs-class shadow-lg mt-3'>
                  <h5>What is the differences between authorization and authentication?</h5>
                  <p>Authorization and Authentication both term use in different types of application to security purpose.Authentication is mainly used to verify user identity whereas Authorization is used to permit users to use resources.In other word, When someone enters a website by giving his or her name, email and password it is called Authentication. When someone uses website's resourses then it is called Authorization  </p>
               </div>
              </div>
              <div className='col-md-6'>
                 <div>
                   <h5>What is the differences between authorization and authentication?</h5>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Blogs;