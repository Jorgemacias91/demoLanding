import axios from 'axios';

export default function deleteUser(idUser) {
    return  function (dispatch) {
        return axios
            .delete(`http://localhost:3001/user/${idUser}`)
            .then((response) => {
                dispatch({ type: "DELETE_USER", payload: response.data })
            })

    };
}