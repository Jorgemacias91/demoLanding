import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import {useSelector, useDispatch} from 'react-redux'
import signOutUsers from '../../Actions/signOutUser'
import {Redirect} from 'react-router-dom'


export default function Navbar() {

const userData = useSelector(state => state.userData);
const dispatch = useDispatch();
const [redirect, setRedirect] = useState(false)


function handleClick() {
  dispatch(signOutUsers())
  localStorage.removeItem('token')
  setRedirect(true)
}
if (redirect) return <Redirect to="/login"></Redirect>

    return (
        <div className={style.containerNav}>

<nav className="navbar navbar-expand-lg navbar-light bg-transparent" >
  <div className="container-fluid">
    <div className="navbar-nav">
    <Link to="/" className="nav-link" className={style.cor} >Achoo</Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li><Link to="/" className="nav-link active " className={style.cor}>HOME</Link></li>
            <li><Link to="/feature" className="nav-link" className={style.cor} >FEATURES</Link></li>
            <li><Link to="/pricing" className="nav-link" className={style.cor} >PRICING</Link></li>
            
            <li><Link to="/contact" className="nav-link" className={style.cor}>CONTACT</Link></li>
            {userData.username ?
          <li><Link to="/about" className="nav-link" className={style.cor}>ABOUT</Link></li>
          :
          <li></li>
          }
     </ul>
     <ul className="navbar-nav">
          {userData.username ? 
          <li><Link to="/" onClick={handleClick} className="nav-link" className={style.cor}>SIGNUP</Link></li>
          :
          <li><Link to="/login" className="nav-link" className={style.cor}>LOGIN</Link></li>
        }
            
            
     </ul>
     
      
    </div>
  </div>
</nav>
        </div>
    )
}