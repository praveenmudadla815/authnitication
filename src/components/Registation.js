import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Registation = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("pk");
    console.log(formData, "formData");
    if (!formData.userName || !formData.password || !formData.email) {
      console.log("Please enter all fields");
      setError("Please enter all fields");

      return;
    }
    setError("");
    navigate("/login");
  };
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Registation;
