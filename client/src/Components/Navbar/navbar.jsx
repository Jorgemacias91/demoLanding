import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import {useSelector, useDispatch} from 'react-redux'
import signOutUsers from '../../Actions/signOutUser'
import {Redirect} from 'react-router-dom'
import getUser from '../../Actions/getUser'

export default function Navbar() {

const userData = useSelector(state => state.userData);
const dispatch = useDispatch();
const [redirect, setRedirect] = useState(false)

useEffect(() => {
  if(userData.id>0){
  dispatch(getUser(userData.id))
  }
}, [])

function handleClick() {
  dispatch(signOutUsers())
  localStorage.removeItem('token')
  setRedirect(true)
}
if (redirect) return <Redirect to="/login"></Redirect>

    return (
        <div className={style.containerNav}>

<nav className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent">
  <div className="container-fluid">
    <div className="navbar-nav">
    <Link to="/" className="nav-link text-white">Achoo</Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li><Link to="/" className="nav-link active text-white">HOME</Link></li>
            <li><Link to="/feature" className="nav-link text-white" >FEATURES</Link></li>
            <li><Link to="/pricing" className="nav-link text-white" >PRICING</Link></li>
            <li><Link to="/about" className="nav-link text-white">ABOUT</Link></li>
            <li><Link to="/contact" className="nav-link text-white">CONTACT</Link></li>
            {userData.id>0 ?
          <li><Link to="/myprofile" className="nav-link text-white">MYPROFILE</Link></li>
          :
          <li></li>
          }
     </ul>
     <ul className="navbar-nav">
          {userData.id > 0 ? 
          <li><Link to="/login" onClick={handleClick} className="nav-link text-white">SIGNUP</Link></li>
          :
          <li><Link to="/login" className="nav-link text-white">LOGIN</Link></li>
        }
            
            
     </ul>
     
      
    </div>
  </div>
</nav>
        </div>
    )
}