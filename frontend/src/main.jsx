import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import AdminLogin from "./components/Admin-login.jsx";
import Admin from "./components/Admin.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

function Main() {
  const [isAuthorized, setIsAuthorized] = useState(false); // State for admin page authorization

  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/home" component={Home} />
          <Route path="/admin-login">
            <AdminLogin setIsAuthorized={setIsAuthorized} />{" "}
          </Route>
          <Route path="/admin">
            {/* {isAuthorized ? ( */}
            <Admin
              isAuthorized={isAuthorized}
              setIsAuthorized={setIsAuthorized}
            />
            {/* ) : (
              <Redirect to="/admin-login" />
            )} */}
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
