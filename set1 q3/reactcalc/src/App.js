import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Calculator from "./components/Calculator";

const App = () => {
    const [users, setUsers] = useState({});
    const [currentUser, setCurrentUser] = useState(null);

    const handleSignup = (user) => {
        if (users[user.email]) {
            alert("Email already exists. Please use a different email.");
            return false;
        }
        setUsers({ ...users, [user.email]: user });
        alert("Signup successful!");
        return true;
    };

    const handleLogin = (email, password) => {
        if (!users[email]) {
            alert("Email not found. Please sign up first.");
            return false;
        }
        if (users[email].password !== password) {
            alert("Password is incorrect.");
            return false;
        }
        setCurrentUser(users[email]);
        return true;
    };

    return (
        <div>
            <h1>Calculator App</h1>
            {!currentUser ? (
                <>
                    <Signup onSignup={handleSignup} />
                    <Login onLogin={handleLogin} />
                </>
            ) : (
                <Calculator user={currentUser} />
            )}
        </div>
    );
};

export default App;
