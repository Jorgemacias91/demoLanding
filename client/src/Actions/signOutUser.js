export default function signOutUsers(data){
    
    return function(dispatch){
            dispatch({
                type: "SIGN_OUT", payload : data
            })}
        }