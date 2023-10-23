import '../styles/App.css';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className='App container-fluid no-gutters'>
      {/* <LandingPage/> */}
      {/* <SignIn/> */}
      <Dashboard name="Chinwe Ibegbu" />
    </div>
  );
}

export default App;
