import React, {useState, useEffect} from 'react';

import '../styles/head.css';
import st from 'ryscott-st';

const Head = function() {

  return (
    <header className='anchor v c'>
      {/* <h1>Royal Desserts</h1> */}
      <img src='/images/dessert.jpg' className='headerImage'/>
    </header>
  );
};

export default Head;
