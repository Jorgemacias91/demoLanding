import axios from 'axios';

export default function editUser(idUser) {
    return async function (dispatch) {
        return await axios
            .put(`http://localhost:3001/user/${idUser}`, {
                
            })
            .then((response) => {
                dispatch({ type: "EDIT_USER", payload: response.data })
            })

    };
}