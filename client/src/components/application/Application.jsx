import React, {useEffect, useState} from 'react';
import {FaMinus as MinIcon} from 'react-icons/fa';

import '../../styles/application.css';
import st from 'ryscott-st';

import Login from './Login.jsx';
import AppForm from './AppForm.jsx';

const Application = function() {
  const [user, setUser] = st.newState('user', useState(null));
  const [view, setView] = useState('login');

  const views = {
    login: (
      <div className='loginView v c'>
        <h2>Welcome to techTree Academy!</h2>
        <h4>Please Sign-Up or Sign-In to continue with the application.</h4>
        <Login/>
      </div>
    ),
    application: (
      <AppForm/>
    )
  };

  useEffect(()=>{
    if (user) {
      setView('application');
    }
  }, [user]);

  return (
    <div className='application v' style={st.showApp ? {top: '0%'} : {}}>
      <MinIcon className='appMin' onClick={()=>{st.setShowApp(false)}}/>
      {views[view]}
    </div>
  );
};

export default Application;

