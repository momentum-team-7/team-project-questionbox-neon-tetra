import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function UserFeed() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('http://swordtail.herokuapp.com/users/')
            .then((response) => {
                console.log('rendering:',response.data)
                const data = response.data.map((dataByUser) => ({
                    id: dataByUser.id,
                    username: dataByUser.username,
                    questions: dataByUser.questions,
                    answers: dataByUser.answers
                }))
            setUsers(data)
            })
    }, [])

    console.log('users is', users)

    return (
        <div className='userfeed-wrap'>
            <h1 className='userfeed-header'>UserFeed</h1>
            {users.map((user) => (
                <li key={user.id}>
                <div className='user-cards'>                
                <Link to={`/owner/${user.id}`} ><h3 className='username-header'>{user.username}</h3></Link>
                <p>Questions asked: {user.questions.length}</p>
                <p>Answers Submitted: {user.answers.length}</p>
                </div>
                </li>
            ))}
        </div>
    )
}
