import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateProject'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        {/* Ensures only 1 route is loaded at a time */}
        <Switch>
          {/*
            - Dsiplays defined components depending on the route defined
            - "exact" will load the exact path that has been defined
          */}

          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
