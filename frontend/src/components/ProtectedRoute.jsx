import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


export default function ProtectedRoute({children}) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, ( currentUser ) => {
            setUser(currentUser);
            setLoading(false);
        });
            
        return () => unsubscribe();

    }, []);

    if (loading) return <p>Loading...</p>;
    return user ? children : <Navigate to="/login" />;
};