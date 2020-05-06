import React from 'react';
import GIGS from "./pages/Gigs";
import GIGSETUP from "./pages/GigSetup";
import ACCOUNT from "../src/pages/Account";
import WELCOME from "./pages/Welcome";
import HOME from "./pages/Home";
import ExternalApi from './pages/ExternalApi'
import Header from "./components/Header";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from "./react-auth0-spa";
function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router history={history}>
      <div>
        <header>
          <Header />
        </header>
        <Switch>
          <Route exact path="/" component={WELCOME} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/gigs" component={GIGS} />
          <Route exact path="/gig-setup" component={GIGSETUP} />
          <Route exact path="/callback" component={HOME} />
          <Route exact path="/home" component={HOME} />
          <Route exact path="/account" component={ACCOUNT} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
