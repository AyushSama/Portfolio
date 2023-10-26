import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Context/Authentication/AuthContext';

export default function Admin() {

	const auth = useContext(AuthContext);

	const handleChange = (e)=>{
		auth.setCredentials({...auth.credentials,[e.target.name]:e.target.value});
	}

	const handleSubmit = (e)=>{
		e.preventDefault();
		auth.handleAdminLogin();
	}


  return (
    <>
    <Link to='/admin' className="btn"></Link>
      <main className="main">
	<div className="container1">
		<section className="wrapper">
			<div className="heading">
				<h1 className="text text-large">Admin</h1>
				<p className="text text-normal">Already a user? <span>
                    <Link to="/login" className="text text-links">Sign In</Link></span>
				</p>
			</div>
			<form name="signin" className="form"onSubmit={handleSubmit}>
                <div className="input-control">
					<label htmlFor="email" className="input-label" hidden>Email Address</label>
					<input type="text" name="name" id="email" onChange={handleChange}  className="input-field" placeholder="Username"/>
				</div>
				<div className="input-control">
					<label htmlFor="email" className="input-label" hidden>Email Address</label>
					<input type="email" name="email" id="email" onChange={handleChange}  className="input-field" placeholder="Email Address"/>
				</div>
				<div className="input-control">
					<label htmlFor="password" className="input-label" hidden>Password</label>
					<input type="password" name="password" id="password" onChange={handleChange}  className="input-field" placeholder="Password"/>
				</div>
				<div className="input-control">
					<Link to="/signup" className="text text-links">Forgot Password</Link>
					<input type="submit" name="submit" className="input-submit" value="Admin Login"/>
				</div>
			</form>
		</section>
	</div>
</main>
    </>
  )
}
