import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state={
  //     currentUser:null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth =>{
      // this.setState({currentUser:user});
      //console.log(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //we check that db has been updated
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        }) 
      }
      else{
        setCurrentUser(userAuth); 
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  
    return (
      // render only one Route and go out the swtich
      <div>
        <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
