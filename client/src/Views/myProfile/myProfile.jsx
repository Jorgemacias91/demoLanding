import React, {useEffect} from 'react'
import style from './myProfile.module.css'
import {useSelector, useDispatch} from 'react-redux'
import signInUsers from '../../Actions/signInUsers'
import Navbar from '../../Components/Navbar/navbar'

export default function MyProfile(){

    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();

    useEffect(() => {
        
            dispatch(signInUsers(userData))
            console.log(userData)
        
    }, [])



    return (
        <div>
            <Navbar/>
            <div>
                <h3>{userData.username}</h3>
                <h3>{userData.name} {userData.lastname}</h3>
                <h3>{userData.birth}</h3>

            </div>
            
        </div>
    )
}