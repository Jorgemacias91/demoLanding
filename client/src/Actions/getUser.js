import axios from 'axios';

export default function getUser(){
    return function(dispatch){
        axios.get(`http://localhost:3001/user`)
        .then (response => dispatch({
            type: "GET_USER", payload : response.data
        }))
    }
}