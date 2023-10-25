import "./App.css";
import Admin from "./Components/Admin";
import Alert from "./Components/Alert";
import Booking from "./Components/Booking";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar.js";
import SignUp from "./Components/SignUp";
import Timeline from "./Components/Timeline";
import AlertState from "./Context/Alerts/AlertState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    return (
        <>
            <AlertState>
                <Router>
                    <Navbar />
                    <Alert />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/timeline" element={<Timeline/>} />
                        <Route path="/contactus" element={<ContactUs/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<SignUp/>} />
                        <Route path="/admin" element={<Admin/>} />
                    </Routes>
                </Router>
            </AlertState>
        </>
    );
}

export default App;
