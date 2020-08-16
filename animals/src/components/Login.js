import React, { useState } from "react";

export default function Login(props) {
    const [login, setLogin] = useState({
        login: "",
        password: ""
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }    
    

    return (
        <div>
            <h1>Welcome to the Safari App!</h1>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  label="username"
                  value={login.username}
                  onchange={handleChange}
                  className="input"
                ></input>
                <input
                  type="text"
                  name="password"
                  label="password"
                  value={login.password}
                  onchange={handleChange} 
                  className="input"
                ></input>
                <button>Login</button>
            </form>
            
        </div>
    )
}