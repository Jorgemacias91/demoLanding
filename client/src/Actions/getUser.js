import axios from 'axios';

export default function getUser(idUser){
    return function(dispatch){
        axios.get(`http://localhost:3001/user/${idUser}`)
        .then (response => dispatch({
            type: "GET_USER", payload : response.data
        }))
    }
}