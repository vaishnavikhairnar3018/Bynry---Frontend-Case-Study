import React from 'react'
import Home from './home/Home'
import {Routes, Route} from "react-router-dom";
import MainProfile from './MainProfile/MainProfile';
import AdminDashboard from './AdminDashboard/AdminDashboard';

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<MainProfile />} />
    <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
    </>
  )
}

export default App
