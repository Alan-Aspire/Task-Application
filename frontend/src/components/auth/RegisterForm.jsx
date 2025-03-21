import React, { useState } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterForm = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        error: ""
    })

    async function handleRegister(e){
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            onRegister();
        } catch (error) {
            setFormData((prevData) => ({ ...prevData, error: error.message }));
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <div>
                <label>email: </label>
                <input type="email" name="email" value={formData.email} onChange={(e) => setFormData((prevData => ({...prevData, [e.target.name]: e.target.value})))} />
            </div>
            <div>
                <label>password: </label>
                <input type="password" name="password" value={formData.password} onChange={(e) => setFormData((prevData => ({...prevData, [e.target.name]: e.target.value})))} />
            </div>
            <button type="submit">Register</button>
            {formData.error && <p>{formData.error}</p>}
        </form>
    );
};

export default RegisterForm;