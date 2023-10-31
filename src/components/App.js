import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../styles/App.css';
import LandingPage from './LandingPage.js';
import SignIn from './SignIn.js';
import Dashboard from './Dashboard.js';
import CVEditor from './CVEditor.js';

function App() {
  return (
    <div className='App container-fluid no-gutters'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard name={"Chinwe Ibegbu"} />} />
        <Route path="/create-new-cv" element={<CVEditor />} />
      </Routes>
    </div>
  );
}

export default App;
