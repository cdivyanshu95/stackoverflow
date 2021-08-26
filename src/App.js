import React, { useState, useEffect } from "react";
import "./App.css";
import Chat from "./chat";
import Create_question from "./create_question";
import db from "./firebase";
import Sidebar from "./sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Sidebar />
          <Route path="/rooms/:roomID">
            <Chat />
          </Route>

          <Route path="/">{/* <Chat /> */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
