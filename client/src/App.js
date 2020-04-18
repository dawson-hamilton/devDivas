import React from 'react';
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Signup} />
          {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
