import React from 'react';
import { BrowserRouter } from 'react-router-dom'

// Components
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
