import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'

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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
