import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './MyComponents/SSO-Login/login';
import Mainpage from './MyComponents/MainPage/mainpage';
import Dashboard from './MyComponents/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Mainpage />}></Route>
          <Route path="/dashboard2" element={<Dashboard />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
