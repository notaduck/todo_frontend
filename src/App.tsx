import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./auth/auth";
import PrivateRoute from "./components/privateRoute";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import Register from "./components/login/register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
