import React, {useEffect} from 'react'
import style from './about.module.css'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import { useDispatch, useSelector } from 'react-redux'
import noProfPic from '../../Images/default.png'
import {useHistory, Link} from 'react-router-dom'
import Edit from '../../Images/editar.svg'
// import getUser from '../../Actions/getUser'


export default function About() {

    const userData = useSelector(state => state.userData)
    const history = useHistory();
    const dispatch = useDispatch()

  //  useEffect(() => {
  //    dispatch(getUser())
  //   }, []) 
    

    return (
      <div>
         <Navbar />
      
        <div className={style.mainContainer}>
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
      </div>
    )
}