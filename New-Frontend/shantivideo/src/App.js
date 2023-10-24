import "./App.css";
import Booking from "./Components/Booking";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar.js";
import Timeline from "./Components/Timeline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                  <Route to="/" element={<Home/>}/>
                  <Route path="/booking" element={<Booking/>}/>
                  <Route path="/timeline" element={<Timeline/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
