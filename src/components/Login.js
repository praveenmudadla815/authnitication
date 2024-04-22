import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const navigate = useNavigate();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "formData");
    navigate("/dashboard");
  };
  return (
    <Container>
      <div>
        <Typography>Login</Typography>
        <form onSubmit={handelSubmit}>
          <TextField
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handelChange}
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />

          <TextField
            type="password"
            name="password"
            value={formData.password}
            onChange={handelChange}
            label="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
