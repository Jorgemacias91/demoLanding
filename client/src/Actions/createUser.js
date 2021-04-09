import axios from 'axios';

export default function createUser(){
    return function(dispatch){
        axios.post(`http://localhost:3001/user`,{

        })
        .then (response => dispatch({
            type: "CREATE_USER", payload : response.data
        }))
    }
}