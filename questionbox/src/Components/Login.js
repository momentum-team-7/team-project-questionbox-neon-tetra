import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default function Login({ isLoggedIn, setAuth }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErorrs] = useState()

    if (isLoggedIn) {
        return <Redirect to="/" />
    }
    function handleSubmit(event) {
        event.preventDefault()
        axios
            .post('http://swordtail.herokuapp.com/auth/token/login/', {
                username: username,
                password: password,
            })
            .then((data) => {
                if (data && data.data.auth_token) {
                    setAuth(username, data.data.auth_token)
                }
            })
            .catch((error) => {
                setErorrs(error.message)
            })
    }

    return (
        <div className="Login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {errors && <div>{errors}</div>}

                <div>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input
                    type="text"
                    id="username"
                    required value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div>
                <label htmlFor="password">
                        Password
                    </label>
                    <input
                    type="text"
                    id="password"
                    required value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <button type="submit">Log in</button>
            </form>
        </div>
    )
}
