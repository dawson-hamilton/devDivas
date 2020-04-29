import React from 'react';
import HOME from "../src/pages/Home";
import GIGS from "./pages/Gigs";
import GIGSETUP from "./pages/GigSetup";
import CALLBACK from "../src/Callback";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>

          <Route exact path="/" />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/gigs" component={GIGS} />
          <Route exact path="/gig-setup" component={GIGSETUP} />
          <Route exact path="/callback" component={CALLBACK} />
        </Switch>
        {/* <Route>
            <NoMatch />
          </Route> */}
      </div>
    </Router>
  );
}

export default App;
