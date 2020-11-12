import React,{Fragment} from 'react';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import './App.css';
function App() {
  return (
    <Fragment>  
      <Router>  
      <Nav />       
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect exact path="/" />
        </Switch> 
      </Router>
    </Fragment> 
  );
}

export default App;
