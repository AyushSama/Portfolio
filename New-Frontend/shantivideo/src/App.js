import "./App.css";
import Alert from "./Components/Alert";
import Booking from "./Components/Booking";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar.js";
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
                    </Routes>
                </Router>
            </AlertState>
        </>
    );
}

export default App;
