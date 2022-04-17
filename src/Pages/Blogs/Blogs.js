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
                 <div className='blogs-class shadow-lg mt-3'>
                   <h5> Why are you using firebase? What other options do you have to implement authentication?</h5>
                   <p>There are many data storage platforms are used to stored user data firebase is one of them. I mainly used firebase for it's security. Also, There are many advantages firebase have. Some advantages are: fast web hosting, Multi-Platfoorm Authentication, Unlimited Google Analytics for mobile apps etc. Other Options for authentication are MongoDB,AUth0,Amazon Cognito,Okta, Passport, JSON web token etc. </p>
                 </div>
              </div>
              <div className='col-md-6'>
                 <div className='blogs-class shadow-lg mt-3'>
                   <h5>What other services does firebase provide other than authentication</h5>
                   <p>Firebase is not only confined with authentication but it also provide many services other than authentication.Facilities provide by firebase is given below.
                    <ol type='1'>
                    <li>
                        Cloud Messaging: That sends notification to Mobile
                    </li>
                    <li>
                        Hosting: It is able to host one's website by providing link.
                    </li>
                    <li>
                        Realtime database: Store and sync app data in miliseconds.
                    </li>
                    </ol>

                   </p>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Blogs;