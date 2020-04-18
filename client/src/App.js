import React from 'react';
import HOME from "../src/pages/Home";
import GIGS from "../src/pages/Gigs";
import Signup from "../src/components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Signup} />
          {/* <Route path="/gigs" component={GIGS} /> */}
          {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
