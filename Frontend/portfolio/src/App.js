
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Schedule from './Components/Schedule';
import AddSchedule from './Components/AddSchedule';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          <Routes>
            <Route path='/schedule' element={<Schedule/>}/>
          </Routes>
          <Routes>
            <Route path='/login' element={<Login/>}/>
          </Routes>
          <Routes>
            <Route path='/addSchedule' element={<AddSchedule/>}/>
          </Routes>
      </Router>
  );
}

export default App;
