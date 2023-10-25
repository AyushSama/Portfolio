import React , {useContext, useEffect} from 'react'
import AlertContext from '../Context/Alerts/AlertContext';

export default function Timeline() {

  const a = useContext(AlertContext);

  useEffect(()=>{
    a.updateAlert('success' , 'Welcome to the Timeline Page!!');
    // eslint-disable-next-line
  },[])

  return (
    <div>
        timline
    </div>
  )
}
