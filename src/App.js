import React, { useState, useEffect } from "react";
import "./App.css";
import Chat from "./chat";
//import Create_question from "./create_question";
import db from "./firebase";
import Sidebar from "./sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Switch>
            <Route path="/rooms/:roomID">
              <Sidebar />
              <Chat />
            </Route>

            <Route path="/">
              <Sidebar />
              <Chat />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
