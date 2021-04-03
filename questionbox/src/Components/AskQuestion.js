import axios from 'axios'
import { useState } from 'react'
// import { Redirect } from 'react-router-dom'


export default function AskQuestion() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    // if (!isLoggin) {
    //     return <Redirect to="/login" />
    // }

    const handleSubmit = (event) => {
        // this function, once the api url is added, should post the question to the database
        
        event.preventDefault()
        axios
            .post(
            'http://swordtail.herokuapp.com/questions/',
            {
                title: title,
                body: body,
            },
            {
                // headers: { Authorization: `Token ${token}`},
            }
        )
        // .then((data) => {
        //     handleDone(data.data)
        // })
    }

    return (
        <div>
            <h2>Ask a Question--</h2>
            <form onSubmit={handleSubmit}>
                <div className="question-title">
                    <label for="question-title"></label>
                    <input id="question-title"
                    type="text"
                    onChange={(event) => setTitle(event.target.value)}>
                    </input>
                </div>
                <div className="question-body">
                    <label for="question-body"></label>
                    <textarea id="question-body"
                    type="text"
                    onChange={(event) => setBody(event.target.value)}>
                    </textarea>
                    <button type="submit">Ask it!</button>
                </div>            
            </form>
        </div>
    )
}
