import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import ResetPassword from './components/resetPassword/ResetPassword'
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Sidebar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
