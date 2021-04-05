import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
        <div>
            <h1>UserFeed baby</h1>
            {users.map((user) => (
                <div><h3>{user.username}</h3>
                <p>Questions asked: {user.questions.length}</p>
                <p>Answers Submitted: {user.answers.length}</p></div>
            ))}
        </div>
    )
}
