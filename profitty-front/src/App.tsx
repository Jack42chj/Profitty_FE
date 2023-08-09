import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import CoachReg from './pages/CoachReg';
import FacilReg from './pages/FacilReg';
import Home from './pages/Home';
import Search from './pages/Search';
import themes from './styles/themes';
import { ThemeProvider } from "@emotion/react";

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/coach_register" element={<CoachReg />} />
        <Route path="/facility_register" element={<FacilReg />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
