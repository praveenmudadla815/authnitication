import React from "react";
import Login from "./components/Login";
import Registation from "./components/Registation";
import DashBoard from "./components/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Registation} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/dashboard" Component={DashBoard} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
