import React from 'react';
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

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// only for collection adding to db, ONE time ONLY 
// import {auth, createUserProfileDocument, addCollectionsAndDocuments} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors'
  // only for collection adding to db, ONE time ONLY 
// import {selectCollectionForPreview} from './redux/shop/shop.selector';

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
    // only for collection adding to db, ONE time ONLY 
    // const {setCurrentUser, collectionsArray} = this.props;

    // this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth =>{
    //   // this.setState({currentUser:user});
    //   //console.log(user);

    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     //we check that db has been updated
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //       });
    //     }) 
    //   }
    //   else{
    //     setCurrentUser(userAuth); 
    //     // addCollectionsAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items})));
    //     // only for collection adding to db, ONE time ONLY
    //     // addCollectionsAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items})));
    //   }
    // });
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
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to = '/' />):(<SignInUpPage/>)} />
        </Switch>
      </div>
    );
    
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // only for collection adding to db, ONE time ONLY 
  // ,collectionsArray: selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
