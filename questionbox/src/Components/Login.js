import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
// import setAuth from './App'

export default function Login({ setAuth, isLoggedIn }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    if (isLoggedIn) {
        return <Redirect to='/' />
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios
            .post('http://swordtail.herokuapp.com/auth/token/login',
            {
                username: username,
                password: password,
            })
            .then((data) => {
                if (data && data.data.auth_token) {
                    setAuth(username, data.data.auth_token)
                }
            })
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label to='username'>
                        Username
                    </label>
                    <input 
                    type='text'
                    id='username'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label to='password'>
                        Password
                    </label>
                    <input
                    type='text'
                    id='password'
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}
