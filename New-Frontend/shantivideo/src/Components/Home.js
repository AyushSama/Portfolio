import React, { useContext, useEffect } from 'react'
import AlertContext from '../Context/Alerts/AlertContext';

export default function Home() {

  const a = useContext(AlertContext);

  useEffect(()=>{
    a.updateAlert('success' , 'Welcome to the Home Page!!');
    // eslint-disable-next-line
  },[])

  return (
    <div>
        This is Home Page.
    </div>
  )
}
