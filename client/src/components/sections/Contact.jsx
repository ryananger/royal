import React from 'react';

import ContactForm from './ContactForm.jsx';

const Contact = function() {
  return (
    <div className='contactCard anchor v c'>
      <img className='leavesFrameLeftContact' src='/images/leaves_frame2.svg'/>
      <h2>Contact Us</h2>
      <div className='formContainer'>
        Have questions? We're here to help.<br /><br />
        <ContactForm/>
      </div>
      <img className='leavesFrameRightContact' src='/images/leaves_frame2.svg'/>
    </div>
  );
};

export default Contact;