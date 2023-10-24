import React from 'react'

export default function Home() {
  return (
    <>
      <div className="container" style={{backdropFilter: 'blur(8px)'}}>
        <h1 className='text-center my-5' style={{color:'white'}}>Hii I'm Anil Yadav!!</h1>

        <section id="services" style={{color:'white' ,fontSize:'20px'}}>
        <h2>Our Services</h2>
        <ul>
            <li>Event Photography:  We specialize in event photography to capture the most significant moments of your special occasions. Our trained photographers have an eye for detail and a knack for capturing candid moments that you'll treasure forever.</li>
            <li>Event Videography: Our cinematic approach ensures that your event's story is told in a way that's both captivating and enduring. We use the latest equipment and editing techniques to produce stunning videos.</li>
            <li>Professional Editing: Every image and video is carefully edited to perfection, enhancing the beauty of your special day. We pay close attention to detail, color correction, and post-production to ensure your photos and videos are top-notch.</li>
        </ul>

        <section id="contact" style={{color:'white' ,fontSize:'20px'}} >
        <h2>Contact Us</h2>
        <p>If you're ready to turn your event into a masterpiece, don't hesitate to get in touch. We're here to discuss your unique needs and provide you with a personalized quote. Reach out to us using the contact details below:</p>
        <address>
            <p>Email: aayush0029@gmail.com</p>
            <p>Phone: 9892328569</p>
            <p>Address: Gorai 1 , Mumbai </p>
        </address>
    </section>
    </section>

      </div>
    </>
  )
}
