import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Pages/Home';
import Example from './Pages/Example';
import LoginPage from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/Example" element={<Layout><Example /></Layout>} />
        <Route path="/Profile" element={<Layout><Profile /></Layout>} />
      </Routes>
    </Router>
  );
};

