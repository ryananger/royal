import React from 'react';

import st from 'ryscott-st';

const Apply = function() {
  return (
    <>
    <h2>Join Us Today</h2>
    <div className='applyInfo v c'>
      Ready to embark on your tech journey? 
      <br/><br/>
      Apply now and take the first step towards mastering modern technology and unlock endless opportunities.<br /><br />
      <button className='applyButton v c' onClick={()=>{st.setShowApp(true)}}>Apply Now</button>
    </div>
    </>
  );
};

export default Apply;