import React from 'react';
import HOME from "../src/pages/Home";
import GIGS from "./pages/Gigs";
import GIGSETUP from "./pages/GigSetup";
import CALLBACK from "../src/Callback";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Auth0Provider } from "./react-auth0-spa";

function App() {
  return (
    <Auth0Provider>

      <Router>
        <div>
          <Header />
          <Route exact path="/" component={HOME} />
          <Route exact path="/gigs" component={GIGS} />
          <Route exact path="/gig-setup" component={GIGSETUP} />
          <Route exact path="/callback" component={CALLBACK} />
          {/* <Route>
            <NoMatch />
          </Route> */}
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
