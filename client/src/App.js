import React from 'react';
import WELCOME from "./pages/Welcome";
import HOME from "./pages/Home";
import GIGS from "./pages/Gigs";
import Giggers from "./pages/Giggers";
import GIGSETUP from "./pages/GigSetup";
import Profile from "./components/Profile";
import Loading from "./components/Loading/Loading";
import LOADING from "./pages/Loading";
import Header from "./components/Header";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from './react-auth0-spa';


function App() {
  const { loading } = useAuth0();
  if (loading) {
    return <Loading />
  }

  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/loading" component={LOADING} />
          <Route exact path="/" component={WELCOME} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/gigs" component={GIGS} />
          <Route exact path="/gig-setup" component={GIGSETUP} />
          <Route exact path="/callback" component={HOME} />
          <Route exact path="/home" component={HOME} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
