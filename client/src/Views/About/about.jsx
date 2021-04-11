import React from 'react'
import style from './about.module.css'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import { useSelector } from 'react-redux'
import noProfPic from '../../Images/default.png'
import {useHistory, Link} from 'react-router-dom'
import Edit from '../../Images/editar.svg'


export default function About() {

    const userData = useSelector(state => state.userData)
    const history = useHistory();
    

    return (
        <div className={style.mainContainer}>
        <Navbar renderTop={false} />
        <div className={style.secondContainer}>
          <div className={style.userDesc}>
  
            <div className={style.userInfo}>
              <h1 className={style.name} >{userData.name} {userData.lastname}</h1>
              <p className={style.rol}>{userData.email} </p>
              <Link to='/editprofile'>
                <img className={style.edit} src={Edit} alt="" />
              </Link>
            
            </div>
            <div className={style.containerPic}>
              <img className={style.userPic} src={noProfPic} alt='User Pic'/>
              <button onClick={()=> history.push('/editprofile')} className={style.editBtn}>
                <img className={style.edit} src={Edit} alt="" />
              </button>
            </div>
          </div>
          
        </div>
  
      </div>
    )
}