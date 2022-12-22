import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './MyComponents/SSO-Login/login';
import Mainpage from './MyComponents/MainPage/mainpage';
import Dashboard from './MyComponents/Dashboard/dashboard';
import Profile from './MyComponents/Profile/profile';
import Problems from './MyComponents/Problems/problems';
import Authenticate from './MyComponents/Authenticate/authenticate';
import Admin from './MyComponents/AdminPage/admin';
import Adminlogin from './MyComponents/Admin_login/adminlogin';
import Wait from './MyComponents/wait/wait';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Mainpage />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin_login" element={<Adminlogin />}></Route>
          <Route path="/authen" element={<Authenticate />} />
          <Route path="/wait" element={<Wait />}/>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='problems' element={<Problems />}></Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
