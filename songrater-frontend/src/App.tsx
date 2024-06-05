import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Leaderboard from "./Components/Leaderboard/Leaderboard";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/leaderboard" Component={Leaderboard} />
      </Routes>
    </Router>
  );
};

export default App;
