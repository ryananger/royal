import React, {useState, useEffect} from 'react';
import {FaMinus as MinIcon} from 'react-icons/fa';

import '../styles/section.css';

const Section = ({content}) => {
  return (
    <section>
      <div className={`content open v c`}>
        {content}
      </div>
    </section>
  );
};

export default Section;