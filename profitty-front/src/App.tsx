import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import CoachReg from './pages/Auth/CoachReg';
import FacilReg from './pages/Auth/FacilReg';
import Home from './pages/Home';
import Search from './pages/Search';
import "./styles/styles.css";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/coach_register" element={<CoachReg />} />
        <Route path="/facility_register" element={<FacilReg />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
  )
}

export default App;
