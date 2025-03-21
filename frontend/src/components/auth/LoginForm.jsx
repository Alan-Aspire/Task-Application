import React, {useState} from 'react'
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm({onLogin}) {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        error: ""
    })

    async function handleLogin(e) {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            onLogin();
        } catch (error) {
            setFormData((prevData) => ({ ...prevData, error: error.message }));
        }

    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label>email: </label>
                    <input type="email" name="email" value={formData.email} onChange={(e) => setFormData((prevData => ({...prevData, [e.target.name]: e.target.value})))} />
                </div>
                <div>
                    <label>password: </label>
                    <input type="password" name="password" value={formData.password} onChange={(e) => setFormData((prevData => ({...prevData, [e.target.name]: e.target.value})))} />
                </div>
                <button type="submit">Login</button>
                {formData.error && <p>{formData.error}</p>}
            </form>
        </div>
    );
}