import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default function Register({ isLoggedIn, setAuth }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErorrs] = useState()

    if (isLoggedIn) {
        return <Redirect to="/" />
    }
    function handleSubmit(event) {
        event.preventDefault()
        axios
            .post('http://swordtail.herokuapp.com/auth/users/', {
                username,
                password,
            })
            .then((res) => {
                return axios
                .post('http://swordtail.herokuapp.com/auth/token/login/', {
                    username,
                    password,
                })
            .then((data) => {
                if (data && data.data.auth_token) {
                    setAuth(username, data.data.auth_token)
                }
            })
        })    
            .catch((error) => {
                let errors = []
                if (error.response) {
                    const data = error.response.data
                    if (data.username) {
                        errors = errors.concat(data.username)
                    }
                    if (data.password) {
                        errors = errors.concat(data.password)
                    }
                }
            })
    }
    
    return (
        <div>
            <h2>
        Register or <Link to="/login">Login</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                {errors && <div>{errors}</div>}

                <div>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input
                    type="text"
                    id="username"
                    required 
                    value ={username}
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
                    required 
                    value ={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
