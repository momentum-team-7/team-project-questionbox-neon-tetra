import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



export default function DetailUser() {
    const { id } = useParams()
    const [userDetail, setUserDetail] = useState([])

    useEffect(() => {
        axios
            .get(`http://swordtail.herokuapp.com/users/${id}`)
            // {
            //     headers: {
            //         Authorization: `Token ${token}`,
            //     },
            // })
            .then((data) => {
                console.log('userDetail:', data.data)
                setUserDetail(data.data)
            })
            
    },[id]);

    
    return (
        <div className ="user-profile">
            
                <h1>{userDetail.username}'s Profile</h1>
                {userDetail.questions ? (
                    <div>
                        <h4>Number of Questions asked: {userDetail.questions.length}</h4>
                        <h4>Number of Answers submitted: {userDetail.answers.length}</h4>

                        <div>
                            <div className="user-questions">
                                <h3>Questions</h3>
                                {userDetail.questions.map((question) => (
                                    <li key={question.id}>{question.title}</li>
                                ))}
                            </div>
                            <div className="user-answers">
                                <h3>Answers</h3>
                                {userDetail.answers.map((answer) => (
                                    <li key={answer.id}>{answer.body}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                    ):(
                <p>Loading...</p>
                )}
        </div>
    )
}
