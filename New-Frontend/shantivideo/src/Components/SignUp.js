import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
      <main class="main">
	<div class="container1">
		<section class="wrapper">
			<div class="heading">
				<h1 class="text text-large">Sign Up</h1>
				<p class="text text-normal">Already a user? <span>
                    <Link to="/login" class="text text-links">Sign In</Link></span>
				</p>
			</div>
			<form name="signin" class="form">
                <div class="input-control">
					<label htmlFor="email" class="input-label" hidden>Email Address</label>
					<input type="text" name="email" id="email" class="input-field" placeholder="Username"/>
				</div>
				<div class="input-control">
					<label htmlFor="email" class="input-label" hidden>Email Address</label>
					<input type="email" name="email" id="email" class="input-field" placeholder="Email Address"/>
				</div>
				<div class="input-control">
					<label htmlFor="password" class="input-label" hidden>Password</label>
					<input type="password" name="password" id="password" class="input-field" placeholder="Password"/>
				</div>
				<div class="input-control">
					<Link to="/login" class="text text-links">Forgot Password</Link>
					<input type="submit" name="submit" class="input-submit" value="Sign Up"/>
				</div>
			</form>
		</section>
	</div>
</main>
    </div>
  )
}
