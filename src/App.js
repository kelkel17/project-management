import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        {/* Ensures only 1 route is loaded at a time */}
        <Switch>
          {/* Dsiplays defined components depending on the route defined */}
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
