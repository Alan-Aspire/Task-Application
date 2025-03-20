import React, {useState} from 'react'


export default function LoginForm() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>username: </label>
                    <input type="text" name="username" value={formData.username} onChange={(e) => setFormData((prevData => ({...prevData, [e.target.name]: e.target.value})))} />
                </div>
                <div>
                    <label>password: </label>
                    <input type="text" name="password" value={formData.password} onChange={(e) => setFormData((prevData => ({...prevData, [e.target.name]: e.target.value})))} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}