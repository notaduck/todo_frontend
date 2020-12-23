import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Auth } from "./auth/auth";
import PrivateRoute from "./components/privateRoute";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import Register from "./components/login/register";

function App() {
  return (
    <Auth>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    </Auth>
  );
}

export default App;
