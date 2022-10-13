import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './MyComponents/SSO-Login/login';
import Mainpage from './MyComponents/MainPage/mainpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Mainpage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
