import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Context/Authentication/AuthContext'

export default function SignUp() {

	const auth = useContext(AuthContext);

	const handleChange = (e) => {
		auth.setCredentials({ ...auth.credentials, [e.target.name]: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		auth.handleSignup();
	}

	return (
		<>
			<Link to='/admin' className="btn"></Link>
			<main className="main">
				<div className="container1">
					<section className="wrapper">
						<div className="heading">
							<h1 className="text text-large">Sign Up</h1>
							<p className="text text-normal">Already a user? <span>
								<Link to="/login" className="text text-links">Sign In</Link></span>
							</p>
						</div>
						<form name="signup" className="form" onSubmit={handleSubmit}>
							<div className="input-control">
								<label htmlFor="email" className="input-label" hidden>Email Address</label>
								<input type="text" name="name" onChange={handleChange} id="username" className="input-field" placeholder="Username" required={true} />
							</div>
							<div className="input-control">
								<label htmlFor="email" className="input-label" hidden>Email Address</label>
								<input type="email" name="email" onChange={handleChange} id="email" className="input-field" placeholder="Email Address" required={true} />
							</div>
							<div className="input-control">
								<label htmlFor="password" className="input-label" hidden>Password</label>
								<input type="password" name="password" onChange={handleChange} id="password" className="input-field" placeholder="Password" required={true} />
							</div>
							<div className="input-control">
								<Link to="/signup" className="text text-links">Forgot Password</Link>
								<input type="submit" name="submit" className="input-submit" value="Sign Up" />
							</div>
						</form>
					</section>
				</div>
			</main>
		</>
	)
}
