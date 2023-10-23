import '../styles/App.css';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import CVEditor from './CVEditor';

function App() {
  return (
    <div className='App container-fluid no-gutters'>
      {/* <LandingPage/> */}
      {/* <SignIn/> */}
      {/* <Dashboard name="Chinwe Ibegbu" /> */}
      <CVEditor cvName="Untitled-4" />
    </div>
  );
}

export default App;
