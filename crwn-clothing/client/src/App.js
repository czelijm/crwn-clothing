import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

// import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// only for collection adding to db, ONE time ONLY 
// import {auth, createUserProfileDocument, addCollectionsAndDocuments} from './firebase/firebase.utils';

// import { setCurrentUser } from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors'
import {checkUserSession} from './redux/user/user.action'
  // only for collection adding to db, ONE time ONLY 
// import {selectCollectionForPreview} from './redux/shop/shop.selector';

const App = ({checkUserSession, currentUser}) => {
  // constructor(){
  //   super();
  //   this.state={
  //     currentUser:null
  //   };
  // }

  // unsubscribeFromAuth = null;

  // const componentDidMount(){
  //   // const {checkUserSession} = this.props;
  //   checkUserSession(); 
  // }

  // componentWillUnmount(){
  //   this.unsubscribeFromAuth();
  // }
  
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])

  return (
    // render only one Route and go out the swtich
    <div>
      <Header />
      <Switch>
        {/* renderIfPathIsExactTheSameAsPathParameter relativePathFromHere componentWeWAntTorender */} 
        <Route exact={true}  path='/' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={()=>currentUser ? (<Redirect to = '/' />):(<SignInUpPage/>)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // only for collection adding to db, ONE time ONLY 
  // ,collectionsArray: selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
