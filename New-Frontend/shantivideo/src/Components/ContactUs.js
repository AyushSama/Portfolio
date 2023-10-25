import React ,{useEffect,useContext} from 'react'
import AlertContext from '../Context/Alerts/AlertContext';

export default function ContactUs() {

    const a = useContext(AlertContext);

  useEffect(()=>{
    a.updateAlert('success' , 'Welcome to the Contact Us Page!!');
    // eslint-disable-next-line
  },[])

  return (
    <div>
      This is contact us
    </div>
  )
}
