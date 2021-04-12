import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'



export function PublicRoute({component, ...options}){
    
    const username = useSelector(state => state.userData.username)
    if(!username) return <Route {...options} component={component}/>
    return <Redirect to="/"/>
}

export function PrivateRoute({component, ...options}){

    const username = useSelector(state => state.userData.username)
    if(username) return <Route {...options} component={component}/>
    return <Redirect to="/"/>
}