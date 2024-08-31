import React, {useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';

import Head from './Head.jsx';
import Foot from './Foot.jsx';
import Section from './Section.jsx';
import Future from './sections/Future.jsx';
import Course from './sections/Course.jsx';
import Curriculum from './sections/Curriculum.jsx';
import Instructor from './sections/Instructor.jsx';
import Price from './sections/Price.jsx';
import Apply from './sections/Apply.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';
import ApplyFloat from './ApplyFloat.jsx';
import Application from './application/Application.jsx';
import Alert from './Alert.jsx';

const isMobile = st.isMobile = window.innerWidth < 1024;

const App = function() {
  const [showApp, setShowApp] = st.newState('showApp', useState(false));
  const [alerts, setAlerts] = st.newState('alerts', useState(0));

  return (
    <div id='app' className='app texture v'>
      <Head/>
      {!st.isMobile && <ApplyFloat />}
      <Section content={<Future/>}/>
      <Section content={<Course/>}/>
      <Section content={<Curriculum/>}/>
      <Section content={<Instructor/>}/>
      <Section content={<Price/>}/>
      <Section content={<Apply/>}/>
      <Section content={<FAQ/>}/>
      <Section content={<Contact/>}/>
      <Application/>
      <Alert/>
      <Foot/>
    </div>
  );
};

export default App;

