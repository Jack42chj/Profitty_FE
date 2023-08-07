import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import themes from './styles/themes';
import { ThemeProvider } from "@emotion/react";

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/coach_register" element={} />
        <Route path="/facility_register" element={} />
        <Route path="/facility_search" element={} />
        <Route path="/coach/home" element={} /> */}
      </Routes>
    </ThemeProvider>
  )
}

export default App;
