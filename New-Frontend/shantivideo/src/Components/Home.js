import React, { useContext, useEffect } from 'react'
import AlertContext from '../Context/Alerts/AlertContext';

export default function Home() {

  const a = useContext(AlertContext);

  useEffect(()=>{
    a.updateAlert('success' , 'Welcome to the Home Page!!');
    document.body.style.backgroundColor = '#424642';
    // eslint-disable-next-line
  },[])

  return (
    <div className="container" style={{backdropFilter: 'blur(8px)'}}>
        <h1 className='text-center my-5' style={{color:'white'}}>Hii I'm Anil Yadav!!</h1>

        <section id="services" style={{color:'white' ,fontSize:'20px'}}>
        <h2>Our Services</h2>
        <ul>
            <li>Event Photography:  We specialize in event photography to capture the most significant moments of your special occasions. Our trained photographers have an eye for detail and a knack for capturing candid moments that you'll treasure forever.</li>
            <li>Event Videography: Our cinematic approach ensures that your event's story is told in a way that's both captivating and enduring. We use the latest equipment and editing techniques to produce stunning videos.</li>
            <li>Professional Editing: Every image and video is carefully edited to perfection, enhancing the beauty of your special day. We pay close attention to detail, color correction, and post-production to ensure your photos and videos are top-notch.</li>
        </ul>
        </section>

      </div>
  )
}
