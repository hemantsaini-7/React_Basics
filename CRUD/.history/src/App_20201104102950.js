import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />

      <Router>
        <Switch>
          <Route exact path="/" component={Add}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
