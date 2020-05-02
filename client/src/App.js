import React from 'react';
import GIGS from "./pages/Gigs";
import GIGSETUP from "./pages/GigSetup";
import ACCOUNT from "../src/pages/Account";
import WELCOME from "./pages/Welcome";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={WELCOME} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/gigs" component={GIGS} />
          <Route exact path="/gig-setup" component={GIGSETUP} />
          <Route exact path="/callback" component={GIGS} />
          <Route exact path="/account" component={ACCOUNT} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
