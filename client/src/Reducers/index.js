

const initialState = {
    user: [],


}

function rootReducer(state = initialState, action) {

    switch (action.type) {

        case "CREATE_USER":
            return {
                ...state,
                user: action.payload
            }

        case "GET_USER":
            return {
                ...state,
                user: action.payload
            }

        case "DELETE_USER" :
            return {
                ...state
            }

        case "EDIT_USER" :
            return {
                ...state
            }

        default:
            return state
    }

}

export default rootReducer;