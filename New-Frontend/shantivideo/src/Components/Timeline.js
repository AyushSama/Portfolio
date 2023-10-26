import React, { useContext, useEffect, useState } from 'react'
import '../Styles/Warning.css'
import AlertContext from '../Context/Alerts/AlertContext';
import Warning from './Warning';
import '../Styles/Timeline.css'

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
        <div className="d-flex justify-content-start my-3">
          <svg className='my-1' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
          </svg>
          <h1 className='mx-3' style={{ borderTop: '3px solid Darkgreen', borderBottom: '5px solid Darkgreen', paddingLeft: '15px', paddingRight: '20px', fontFamily: 'Courgette , cursive' }}>Timeline</h1>
        </div>
      </div>}
    </div>
  )
}
