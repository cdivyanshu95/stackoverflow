import React, { useState, useEffect } from "react";
import "./App.css";
import Chat from "./chat";
import Sidebar from "./sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomID">
              <Chat />
            </Route>

            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
