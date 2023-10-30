import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../styles/App.css';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import CVEditor from './CVEditor';

function App() {
  return (
    <div className='App container-fluid no-gutters'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" action={async ({ request }) => {
          const formData = await request.formData();
          // return updateTeam(formData);
        }} element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard name={"Chinwe Ibegbu"} />} />
        <Route path="/create-new-cv" element={<CVEditor />} />
      </Routes>
    </div>
  );
}

export default App;
