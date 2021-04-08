import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'




export default function DetailUser() {
    const { id } = useParams()
    const [userDetail, setUserDetail] = useState([])


    useEffect(() => {
        axios
            .get(`http://swordtail.herokuapp.com/users/${id}`)
            .then((data) => {
                console.log('userDetail:', data.data)
                setUserDetail(data.data)
            })
            
    },[id]);


    
    return (
        <div className ="user-profile">
                <div className='user-profile-top'>
                    <h1>{userDetail.username}'s Profile</h1>
                    

                </div>
                {userDetail.questions ? (
                    <div>
                        <h4>Number of Questions asked: {userDetail.questions.length}</h4>
                        <h4 className='user-profile-divider'>Number of Answers submitted: {userDetail.answers.length}</h4>
                        <div>
                            <div className="user-questions">
                                <h3>Questions</h3>
                                {userDetail.questions.map((question) => (
                                    <li key={question.id}><Link to={`/question/${question.id}`}>{question.title}</Link></li>
                                ))}
                            </div>

                            <div className="user-answers">
                                <h3>Answers</h3>
                                {userDetail.answers.map((answer) => (
                                    <div>    
                                        <li key={answer.id}>{answer.body}</li>
                                        <p>Question: <Link to={`/question/${answer.question}`}>{answer.question_title}</Link></p>
                                    </div>    
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
