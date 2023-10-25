import React , {useContext, useEffect} from 'react'
import AlertContext from '../Context/Alerts/AlertContext';

export default function Booking() {

  const a = useContext(AlertContext)

  useEffect(()=>{
    a.updateAlert('success' , 'Welcome to the Booking Page!!');
    // eslint-disable-next-line
  },[])

  return (
    <div>
      booking
    </div>
  )
}
