import React from "react";
import Login from "./components/Login";
import Registation from "./components/Registation";
import DashBoard from "./components/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import withAuth from "./components/withAuth";
import { AuthProvider } from "./components/AuthContext";

const App = () => {
  const ProtectedDashboard = withAuth(DashBoard);
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Registation} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/dashboard" Component={ProtectedDashboard} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
