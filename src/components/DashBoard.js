import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const DashBoard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Dashboard
        </Typography>
        <Button
          onClick={handleLogout}
          variant="contained"
          color="primary"
          fullWidth
        >
          Logout
        </Button>
      </div>
    </Container>
  );
};

export default DashBoard;
