

const initialState = {
    userData: {
        id: 0,
        username: "",
        name: "",
        lastname: "",
        password: "",
        email: "",
        birth: ""
    },


}

function rootReducer(state = initialState, action) {

    switch (action.type) {

        case "SIGN_IN":
            if (action.payload.auth === true) {
                return {
                    ...state,
                    userData: action.payload.user
                }

            } else {
                return {
                    ...state
                }
            }

        case "SIGN_IN_REFRESH":
            return {
                ...state,
                userData: action.payload
            }

        case "SIGN_OUT":
            return {
                ...state,
                userData: {
                id: 0,
                username: "",
                name: "",
                lastname: "",
                password: "",
                email: "",
                birth: ""
            }
        }


        // case "GET_USER":
        //     return {
        //         ...state,
        //         userData: action.payload
        //     }

        // case "DELETE_USER":
        //     return {
        //         ...state
        //     }

        // case "EDIT_USER":
        //     return {
        //         ...state
        //     }

        default:
            return state
    }

}

export default rootReducer;