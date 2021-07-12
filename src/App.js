import React from 'react';
import Header from './Header';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Component/Profile';
import Login from './Login';
import BestBooks from './BestBooks'
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
 
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated ? <BestBooks /> : <Login />}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              {this.props.auth0.isAuthenticated ? <Profile /> : <Login />}
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);