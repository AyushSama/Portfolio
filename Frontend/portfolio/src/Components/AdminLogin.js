import React ,{useState} from 'react'

export default function AdminLogin() {

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

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log(authToken)
        try {
            const apiUrl = "https://shantivideo-7crh.onrender.com/api/admin/addadmin";
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
            localStorage.setItem('auth-token',ele.authToken);
            setAuthToken(ele.authToken)
            alert(ele.message);
        } catch (error) {
            alert(error);
        }
    };

  return (
    <div>
	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>
											<div class="form-group">
												<input type="text" name="logname" class="form-style" onChange={handleName} placeholder="Your Full Name" id="logname" autocomplete="off" required="true"/>
												<i class="input-icon uil uil-user"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="email" name="logemail" class="form-style" onChange={handleEmail} placeholder="Your Email" id="logemail" autocomplete="off" required="true"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" onChange={handlePass} placeholder="Your Password" id="logpass" autocomplete="off" required="true"/>
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
  )
}
