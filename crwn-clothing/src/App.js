import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
)



function App() {
  return (
    // render only one Route and go out the swtich
    <Switch>
      <div>
        {/* renderIfPathIsExactTheSameAsPathParameter relativePathFromHere componentWeWAntTorender */}
        <Route exact={true} path='/' component={HomePage} /> 
        <Route exact={false} path='/shop/hats' component={HatsPage} />
      </div>
    </Switch>
  );
}

export default App;
