import React from 'react';
import HOME from "../src/pages/Home";
import GIGS from "./pages/Gigs";
import GIGSETUP from "./pages/GigSetup";
import ACCOUNT from "../src/pages/Account";
import Header from "./components/Header";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from './components/PrivateRoute';
import Loading from '../src/components/Loading/Loading'
import { useAuth0 } from "./react-auth0-spa";


function App() {

  const { loading, user } = useAuth0();
  return (


    <Router history={history}>

      <div>
        <Header />
        <Switch>
          <Route exact path="/" />
          <PrivateRoute exact path="/gigs" component={GIGS} />
          <PrivateRoute exact path="/gig-setup" >
            {GIGSETUP}
          </PrivateRoute>
          <Route exact path="/callback" component={HOME} />
          <PrivateRoute exact path="/account" component={ACCOUNT} />
          <PrivateRoute path="/profile" component={Profile} />

        </Switch>
        {/* <Route>
            <NoMatch />
          </Route> */}
      </div>
    </Router>

  );
}

export default App;
