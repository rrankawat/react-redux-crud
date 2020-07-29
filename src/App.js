import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Users from './components/users/Users';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container pt-3">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/users" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
