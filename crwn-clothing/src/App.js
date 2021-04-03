import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'


function App() {
  return (
    // render only one Route and go out the swtich
    <div>
      <Header/>
      <Switch>
        {/* renderIfPathIsExactTheSameAsPathParameter relativePathFromHere componentWeWAntTorender */} 
        <Route exact={true}  path='/' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
