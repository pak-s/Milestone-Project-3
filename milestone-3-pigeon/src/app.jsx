// Render a specific component responsible for rendering registration form and login form

// // Path: milestone-3-pigeon/front-end/app.js

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to Pigeon the way to clear</h1>
        <Route exact path="/" component={LandingPage} />
      </div>
    </Router>
  );
};

export default App;
