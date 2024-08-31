import React from 'react';

import st from 'ryscott-st';

const ApplyFloat = function() {
  return (
    <>
    <div className='courseInfo h c' onClick={()=>{st.setShowApp(true)}}>
      <b>APPLY</b>
      <small>Limited space available! Enrollment deadline is December 16. The pilot course begins on January 6, 2025.</small>
    </div>
    </>
  );
};

export default ApplyFloat;