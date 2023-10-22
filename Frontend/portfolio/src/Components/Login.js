import React, { useState } from "react";
import "./Login.css";

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
        try {
            const apiUrl = "http://localhost:5000/api/login";
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
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
            setAuthToken(ele.authToken);
            localStorage.setItem("auth-token", ele.authToken);
            console.log(ele);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="container1">
            <div class="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div class="signup">
                    <form onSubmit={handleSignup}>
                        <label for="chk" aria-hidden="true">
                            Sign up
                        </label>
                        <input
                            type="text"
                            name="txt"
                            onChange={handleName}
                            placeholder="User name"
                            required="true"
                        />
                        <input
                            type="email"
                            name="email"
                            onChange={handleEmail}
                            placeholder="Email"
                            required="true"
                        />
                        <input
                            type="password"
                            name="pswd"
                            onChange={handlePass}
                            placeholder="Password"
                            required="true"
                        />
                        <button className="button" type="submit">
                            Sign up
                        </button>
                    </form>
                </div>

                <div class="login">
                    <form onSubmit={handleLogin}>
                        <label for="chk" aria-hidden="true">
                            Login
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleEmail}
                            placeholder="Email"
                            required="true"
                        />
                        <input
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            onChange={handlePass}
                            required="true"
                        />
                        <button className="button" type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
