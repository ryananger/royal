import React, {useEffect, useState} from 'react';

import {ax} from 'util';

const AppForm = function() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async function(e) {
    e.preventDefault();

    const form = document.getElementById('appForm');

    var application = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      dob: form.DOB.value,
      location: form.location.value,
      experience: form.experience.value,
      intentions: form.intentions.value,
      commitment: form.commitment.value
    };

    var result = await ax.submitApplication(application);

    if (result) {
      setSubmitted(true);
    }
  };

  return (
    <>
    {!submitted && 
      <form id='appForm' className='appForm v'>
        <h4>Application</h4>
        <input type='text' name='name' placeholder='Name?' required/>
        <input type='email' name='email' placeholder='Email?' required/>
        <input type='phone' name='phone' placeholder='Phone number?' required/>
        <input type='text' name='DOB' placeholder='Date of Birth?' required/>
        <input type='text' name='location' placeholder='Location?' required/>
        <br/>
        <textarea name='experience' placeholder='Do you have any programming experience? Please explain.' required/>
        <textarea name='intentions' placeholder='What do you hope to get out of this course?' required/>
        <br/>
        <input type='number' name='commitment' placeholder='How many hours can you commit each week?' required/>
        <button className='applyButton' onClick={handleSubmit}>SUBMIT</button>
        <br/><br/>
      </form>}
    {submitted && 
      <div className='loginView v c'>
        Your application has been submitted! Expect a response within 5 business days.
      </div>}
    </>
  );
};

export default AppForm;

