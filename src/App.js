import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS file for styling
import About from './Components/About';
import Service from './Components/Service';
import Banner from './Components/Banner';
import Home from './Components/StudentDashboard/Home';
import Subject from './Components/StudentDashboard/Subject';
import Sidebar from './Components/Sidebar';
import Dabout from './Components/StudentDashboard/Dabout';
import Registration from './Components/StudentDashboard/Registration';
import Changepass from './Components/StudentDashboard/Changepass';
import Logout from './Components/StudentDashboard/Logout';
import Desc from './Components/StudentDashboard/Desc';
import Search from './Components/StudentDashboard/Search';
import Dashboard from './Components/AdminDashboard/Dashboard';
import Student from './Components/AdminDashboard/Student';
import Ahome from './Components/AdminDashboard/Ahome';
import Apassword from './Components/AdminDashboard/Apassword';
import AProfile from './Components/AdminDashboard/AProfile';
import Alogout from './Components/AdminDashboard/Alogout';
import Signup3 from './Components/Signup3';
import Login1 from './Components/Login1';
import Resister from './Components/Resister';
import Course from './Components/AdminDashboard/Course';
import History from './Components/AdminDashboard/History';
import { useState } from 'react';
// import Signup2 from './Components/Signup2';

function App() {
  const [lastDeletedStudent, setLastDeletedStudent] = useState(null);
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/about" element={<About title="About us" />} />
          <Route path="/service" element={<Service title="Courses" />} />
          <Route path="/" element={<Banner title="Welcome to Student Subject Registration" />} />
          <Route path="/dashboard" element={<Sidebar title="dashbaord" />} />
          <Route path="/log" element={<Resister title="login" />} />
          <Route path="/dabout" element={<Dabout title="studentabout" />} />
          <Route path="/dsubject" element={<Subject title="studentsubject" />} />
          <Route path="/dregistration" element={<Registration title="sudentregistartion" />} />
          <Route path="/dpassword" element={<Changepass title="dashbaord" />} />
          <Route path="/dlogout" element={<Logout title="dashbaord" />} />
          <Route path="/desc/:name" element={<Desc title="dascription" />} />
          <Route path="/search" element={<Search />} />
          <Route path="/bikash" element={<Dashboard />} />
          <Route path="/dstudent" element={<Student setLastDeletedStudent={setLastDeletedStudent} />} />
          <Route path="/dHistory" element={<History lastDeletedStudent={lastDeletedStudent} />} />
          <Route path="/Ahome" element={<Ahome />} />
          <Route path="/Apassword" element={<Apassword />} />
          <Route path="/Aabout" element={<AProfile />} />
          <Route path="/Alogout" element={<Alogout />} />
          {/* <Route path="/RS" element={<Signup1 title="signup" />} /> */}
          <Route path="/RS" element={<Signup3 title="signup" />} />
          <Route path="/RS1" element={<Login1 />} />
          <Route path="/dhome" element={<Home title="studenthome" />} />
          <Route path="/acourse" element={<Course title="studenthome" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
