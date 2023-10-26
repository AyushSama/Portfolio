import React, { useContext, useEffect, useState } from 'react'
import '../Styles/Warning.css'
import AlertContext from '../Context/Alerts/AlertContext';
import Warning from './Warning';
import { useSearchParams } from 'react-router-dom';

export default function Timeline() {

  const [contextVisibility, setContentVisibility] = useState(true);

  const alertt = useContext(AlertContext);

  const checkAuthToken = () => {
    if (localStorage.getItem('auth-token')) {
      setContentVisibility(false);
    }
    else {
      alertt.updateAlert('danger', 'Please Login First!');
      setContentVisibility(true)
    }
  }

  useEffect(() => {
    checkAuthToken();
  }, [])

  return (
    <div>
      {contextVisibility && <Warning />}
      {!contextVisibility && <div className="container">
          
      </div>}
    </div>
  )
}
