import axios from 'axios' 


export const getQuestionList = () => {
    const questionListUrl = 'http://swordtail.herokuapp.com/questions/'
    return axios.get(questionListUrl).then((data) => data.data.title)
}