import React, {useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';

import Head from './Head.jsx';
import Foot from './Foot.jsx';
import Section from './Section.jsx';
import Intro from './sections/Intro.jsx';
import About from './sections/About.jsx';
import Why from './sections/Why.jsx';
import Alert from './Alert.jsx';

const isMobile = st.isMobile = window.innerWidth < 1024;

const App = function() {
  const [alerts, setAlerts] = st.newState('alerts', useState(0));

  return (
    <div id='app' className='app v'>
      <Head/>
      <Section content={<Intro/>}/>
      <Section content={<About/>}/>
      <Section content={<Why/>}/>
      <Alert/>
      <Foot/>
    </div>
  );
};

export default App;

