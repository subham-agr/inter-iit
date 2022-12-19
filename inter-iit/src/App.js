import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './MyComponents/SSO-Login/login';
import Mainpage from './MyComponents/MainPage/mainpage';
import Dashboard from './MyComponents/Dashboard/dashboard';
import Profile from './MyComponents/Profile/profile';
import Problems from './MyComponents/Problems/problems';
import Authenticate from './MyComponents/Authenticate/authenticate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Mainpage />}></Route>
          <Route path="/authen" element={<Authenticate />} />
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
