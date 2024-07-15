import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Pages/Home';
import Example from './Pages/Example';
import LoginPage from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Finance from './Pages/Finance';
import Games from './Pages/Games';
import CreateAdd from './Pages/CreateAdd';
import EditAdd from './Pages/EditAdd'

import Albion from './Pages/GameList/Albion';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/Example" element={<Layout><Example/></Layout>} />
        <Route path="/Profile" element={<Layout><Profile/></Layout>} />
        <Route path="/Finance" element={<Layout><Finance/> </Layout>}/>
        <Route path="/Games" element={<Layout><Games/></Layout>} />
        <Route path="/CreateAdd" element={<Layout><CreateAdd/></Layout>} />
        <Route path="/EditAdd" element={<Layout><EditAdd/></Layout>} />



        <Route path="/Albion" element={<Layout><Albion /></Layout>} />
      </Routes>
    </Router>
  );
};

