import React from 'react';
import Home from './Home';
import Add from './Add'

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Switch>
          <Route exact path="/add" component={Add}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
