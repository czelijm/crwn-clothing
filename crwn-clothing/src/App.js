import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  
    return (
      // render only one Route and go out the swtich
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {/* renderIfPathIsExactTheSameAsPathParameter relativePathFromHere componentWeWAntTorender */} 
          <Route exact={true}  path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInUpPage} />
        </Switch>
      </div>
    );
    
  }
}

export default App;
