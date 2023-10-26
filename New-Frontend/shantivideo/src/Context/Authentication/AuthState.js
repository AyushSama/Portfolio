import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import AlertContext from "../Alerts/AlertContext"

const AuthState = (props)=>{

    const [credentials , setCredentials] = useState({
        name : '',
        email : '',
        password : ''
    })

    const [authToken , setAuthToken] = useState('');
    
    const alertt = useContext(AlertContext);

    // Login Function
    const handleLogin = async () => {
        try {
            const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/login`;
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                }),
            });
            let ele = await response.json();
            console.log(ele)
            if(ele.message==='Login Success!!')
                alertt.updateAlert('success' , ele.message);
            else
                alertt.updateAlert('danger', JSON.stringify(ele.message))

            localStorage.setItem("auth-token", ele.authToken);
            setAuthToken(ele.authToken);
        } catch (error) {
            console.log(error)
            alertt.updateAlert('danger','SERVER SIDE ISSUE!!');
        }
    };
    
    // Sign Up function
    const handleSignup = async () => {
        try {
            const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/createuser`;
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                }),
            });
            let ele = await response.json();

            if(ele.message==='User Created , Now please Login!')
                alertt.updateAlert('success' , ele.message);
            else if(ele.message==='User Already Exists!!')
                alertt.updateAlert('warning' , ele.message);
            else
                alertt.updateAlert('danger', ele.message)
        } catch (error) {
            console.log(error);
            alertt.updateAlert('danger','SERVER SIDE ISSUE!!');
        }
    };

    //Login for Admin

    const handleAdminLogin = async () => {
        console.log(authToken)
        try {
            const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/admin/addadmin`;
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                }),
            });
            let ele = await response.json();
            localStorage.setItem('auth-token',ele.authToken);
            setAuthToken(ele.authToken)

            if(ele.message==='Admin Logged In!!')
                alertt.updateAlert('success' , ele.message);
            else if(ele.message==='Admin Already Exists!!')
                alertt.updateAlert('warning' , ele.message);
            else
                alertt.updateAlert('danger', ele.message)

        } catch (error) {
            console.log(error);
            alertt.updateAlert('danger','SERVER SIDE ISSUE!!');
        }
    };


    return (
        <AuthContext.Provider value={{credentials,setCredentials,handleSignup ,handleLogin , handleAdminLogin}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState