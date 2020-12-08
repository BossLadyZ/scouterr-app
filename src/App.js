import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./Authentication/Login";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Authentication/Auth";
import SignUp from "./Authentication/SignUp";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
