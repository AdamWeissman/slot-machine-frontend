import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Menu() {
  return (
    <Router>
      <div className="topnav">
         <Link to="/">HOME</Link>
         <Link to="/account">ACCOUNT</Link>
      </div>
    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return <h2>HOME</h2>;
}

function Account() {
  return <h2>ACCOUNT</h2>;
}