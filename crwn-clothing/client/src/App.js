import React, {lazy, Suspense, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {GlobalStyle} from './global.styles';

// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
// import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

// import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// only for collection adding to db, ONE time ONLY 
// import {auth, createUserProfileDocument, addCollectionsAndDocuments} from './firebase/firebase.utils';

// import { setCurrentUser } from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors'
import {checkUserSession} from './redux/user/user.action'
  // only for collection adding to db, ONE time ONLY 
// import {selectCollectionForPreview} from './redux/shop/shop.selector';

//lazy react, chunks, use Supense to not get error while chunk is loading
const HomePage = lazy(()=>import('./pages/homepage/homepage.component'));
const ShopPage = lazy(()=>import('./pages/shop/shop.component'));
const SignInUpPage = lazy(()=>import('./pages/sign-in-up/sign-in-up.component'));
const CheckoutPage = lazy(()=>import('./pages/checkout/checkout.component'));


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
      <GlobalStyle/>
      <Header />
      <Switch>
        {/* renderIfPathIsExactTheSameAsPathParameter relativePathFromHere componentWeWAntTorender */}
        <Suspense fallback={<Spinner/>}> 
          <Route exact={true}  path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={()=>currentUser ? (<Redirect to = '/' />):(<SignInUpPage/>)} />
        </Suspense>
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
