
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Signin from './pages/Signin';
import Headlines from './pages/Hedlines';
import Local from './pages/Local';
import India from './pages/India';
import Business from './pages/Business';
import World from './pages/World';
import Signup from './pages/Signup';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/headline" element={<Headlines/>} />
      <Route path="/local" element={<Local/>} />
      <Route path="/india" element={<India />} />
      <Route path="/business" element={<Business />} />
      <Route path="/world" element={<World />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
       */}
      </Routes>
    </div>
  );
}

export default App;
