import axios from 'axios'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'


export default function AskQuestion({ token, handleDone }) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [submitted, setSubmitted] = useState(false)
    
    // if (!isLoggin) {
    //     return <Redirect to="/login" />
    // }


    // this was to move the user off the AskQuestion page on submission of the form, but the form wasn't actually submitting and the user was routed off too quickly // add line 17 down to the final button at the botttom
    // onClick={handleClick}
    // const history = useHistory();
    // const handleClick = () => {
    //     history.push("/UserFeed")

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
            
        // setSubmitted(true);
        // if (submitted) {
        //     return <Redirect to="/" />
        // }

    return (
        <div>
            <h2>Ask a Question--</h2>
            <form onSubmit={(event)=> handleSubmit(event)}>
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
