import React, { useState } from "react";

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authToken, setAuthToken] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePass = (event) => {
        setPassword(event.target.value);
    };

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(authToken)
        try {
            const apiUrl = "http://localhost:5000/api/login";
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            let ele = await response.json();
            alert(ele.message);
            setAuthToken(ele.authToken);
            localStorage.setItem("auth-token", ele.authToken);
            console.log(ele);
        } catch (error) {
            alert(error);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = "http://localhost:5000/api/createuser";
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                }),
            });
            let ele = await response.json();
            alert(ele.message);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="container1">
	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												<input type="email" onChange={handleEmail} name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" onChange={handlePass} name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<button href="#" class="btn mt-4" onClick={handleLogin}>submit</button>
                            				<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>
											<div class="form-group">
												<input type="text" name="logname" onChange={handleName} class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
												<i class="input-icon uil uil-user"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="email" name="logemail" onChange={handleEmail} class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" onChange={handlePass} class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<button class="btn mt-4" onClick={handleSignup} >submit</button>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
        </div>
    );
}
