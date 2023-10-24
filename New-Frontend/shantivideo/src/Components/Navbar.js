import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

export default function Navbar() {

    const [active,setActive] = useState('Home')

    const handleChange = (e)=>{
        const text = e.target.innerText
        setActive(text)
    }
    
    const handleClick = (e)=>{
        handleChange(e);
    }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light"   style={{backgroundColor:'#FCE09B' , color:'#186F65'}}>
  <div className="container-fluid">
    <img className="navbar-brand" src={logo} alt={logo} style={{width:'85px'}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontSize:'17px'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link id='home' className= {`nav-link ${active==='Home'?'active':''}`} onClick={handleClick} aria-current="page" to="/"><strong>Home</strong></Link>
        </li>
        <li className="nav-item">
          <Link id='booking' className={`nav-link ${active==='Booking'?'active':''}`} onClick={handleClick} to="/booking"><strong>Booking</strong></Link>
        </li>
        <li className="nav-item">
          <Link id='timeline' className={`nav-link ${active==='Timeline'?'active':''}`} onClick={handleClick} to="/timeline"><strong>Timeline</strong></Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"><strong>Search</strong></button>
      </form>
      <button className="btn btn-success mx-2">Login</button>
    </div>
  </div>
</nav>
    </>
  )
}
