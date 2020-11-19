import React from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

import './App.css';

function App() {
  return (
    <div>
      switch (flag){
        case 1:
          <Page1/>
           break;
        case 2:
          <Page2/>
          break;
      }
      <Page1/>
      <Page2/>
    </div>
  );
}

export default App;
