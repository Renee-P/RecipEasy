// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Saves from "./components/Saves.jsx";
import AdminLogin from "./components/Admin-login.jsx";
import Admin from "./components/Admin.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/my-saves" component={Saves} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  </BrowserRouter>
);
