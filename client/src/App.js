import React from 'react';
import HOME from "../src/pages/Home";
import GIGS from "../src/pages/Gigs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={HOME} />
          <Route path="/gigs" component={GIGS} />
          {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
