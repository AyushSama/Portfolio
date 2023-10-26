import React, { useContext } from 'react'
import '../Styles/Auth.css'
import { Link } from 'react-router-dom'
import AuthContext from '../Context/Authentication/AuthContext'

export default function Login() {

	const auth = useContext(AuthContext);

	const handleSubmit = (e)=>{
		e.preventDefault();
		console.log(auth.credentials)
		auth.handleLogin();	
	}
	
	const handleChange = (e)=>{
		auth.setCredentials({...auth.credentials,[e.target.name]:e.target.value});
	}

  return (
	<>
	<main class="main">
	<div class="container1">
		<section class="wrapper">
			<div class="heading">
				<h1 class="text text-large">Sign In</h1>
				<p class="text text-normal">New user? <span><Link to="/signup" class="text text-links">Create an account</Link></span>
				</p>
			</div>
			<form name="signin" class="form" onSubmit={handleSubmit}>
				<div class="input-control">
					<label for="email" class="input-label" hidden>Email Address</label>
					<input type="email" name="email" onChange={handleChange} id="email" class="input-field" placeholder="Email Address" required={true}/>
				</div>
				<div class="input-control">
					<label for="password" class="input-label" hidden>Password</label>
					<input type="password" name="password" onChange={handleChange} id="password" class="input-field" placeholder="Password" required={true}/>
				</div>
				<div class="input-control">
					<Link to="/login" class="text text-links">Forgot Password</Link>
					<input type="submit" name="submit" class="input-submit" value="Sign In"/>
				</div>
			</form>
		</section>
	</div>
</main>
	</>
  )
}
