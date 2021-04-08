import axios from 'axios'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'


export default function AskQuestion({ token, handleDone }) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [submitted, setSubmitted] = useState(false)
    

    if (submitted) {
        return <Redirect to='/' />
    }
   
    const handleSubmit = (event) => {
        console.log('handleSubmit running')
        event.preventDefault()
        axios
            .post(
            'http://swordtail.herokuapp.com/questions/',
            {
                title: title,
                body: body,
            },
            {
                headers: { Authorization: `Token ${token}`},
            })
            .then((response) => {
                if(response.data != null) {
                    alert('Your question was submitted!')
                    setSubmitted(true)
                }
            })
        }
    
    return (
        <div className="askquestion-wrapper">
            <h1>Ask Your Question</h1>
            <form onSubmit={(event)=> handleSubmit(event)}>
                <div className="question-title">
                    <label for="question-title"></label>
                    <input id="question-title"
                    type="text"
                    placeholder='Enter your title'
                    onChange={(event) => setTitle(event.target.value)}>
                    </input>
                </div>
                <div className="question-body">
                    <label for="question-body"></label>
                    <textarea id="question-body"
                    type="text"
                    placeholder="Enter your question"
                    onChange={(event) => setBody(event.target.value)}>
                    </textarea>
                    <button className="btn btn-dark" type="submit">Ask it!</button>
                </div>            
            </form>
        </div>
    )
}
