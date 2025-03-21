import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
        <div>
            <h2>Login</h2>
            <LoginForm onLogin={() => navigate("/dashboard")} />
        </div>
    </div>

  );
};

export default Login;