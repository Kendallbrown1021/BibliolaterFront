import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login.js";
import Home from "./pages/home/Home.js";

import "./App.css";

import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const LogUser = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <nav className="flex justify-between absolute top-0 left-0 right-0 bg-transparent z-10">
        <Link to="/">Home</Link>
        {loggedIn === true ? (
          <p>USER</p>
        ) : (
          <Link to="/login" onClick={LogUser}>
            Login
          </Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
