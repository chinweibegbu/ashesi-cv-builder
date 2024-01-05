import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import '../styles/App.css';
import LandingPage from './LandingPage.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import Dashboard from './Dashboard.js';
import CVEditorNew from './CVEditorNew.js';
import CVEditorExisting from './CVEditorExisting.js';

function App() {
  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  }

  return (
    <div className='App container-fluid no-gutters'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-new-cv" element={<CVEditorNew backHandler={backHandler} />} />
        <Route path="/edit-cv" element={<CVEditorExisting backHandler={backHandler} />} />
      </Routes>
    </div>
  );
}

export default App;
