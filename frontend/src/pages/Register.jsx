import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
        <div>
            <h2>Register</h2>
            <RegisterForm onRegister={() => navigate("/dashboard")} />
        </div>

    </div>

  );
};

export default Register;