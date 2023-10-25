import React ,{useEffect,useContext} from 'react'
import '../Styles/ContactUs.css'
import logo from './logo.png'

export default function ContactUs() {
  return (
    <div className="ayush">
  
<section className="contact-container">
      <div className="contact-logo">
        <img src={logo} alt={logo}  />
      </div>
      <form className="contact-form">
        <div className="heading">
          <h2>CONTACT US</h2>
          <p>feel free to reach out to us, we'd love to hear from you!</p>
        </div>
        <div className="input">
          <i className="fa-regular fa-user"></i>
          <input name="username" type="text" placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-regular fa-envelope"></i>
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div className="input">
          <i className="fa-regular fa-message"></i>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            style={{resize: "none"}}
          ></textarea>
        </div>
        <input className="button" type="button" value="Submit" />
      </form>
      <div className="contact-info">
        <h3 className="heading">OUR INFORMATIONS</h3>
        <ul className="contacts">
          <li>
            <i className="fa-solid fa-location-dot"></i>
            Gorai , Mumbai-92 , MH-INDIA
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            aayush0029@gmail.com
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            +91-8828350426
          </li>
          <li>
            <i className="fa-solid fa-print"></i>
            +91-9892328569
          </li>
        </ul>
        <div className="social-links"></div>
      </div>
    </section>
</div>
  )
}
