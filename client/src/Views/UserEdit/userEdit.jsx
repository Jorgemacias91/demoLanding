import React, { useState } from 'react';
import style from './userEdit.module.css'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import signInUsers from '../../Actions/signInUsers'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom';
import deleteUser from '../../Actions/deleteUser'
import imgDelete from '../../Images/eliminar.svg'
import signOutUser from '../../Actions/signOutUser'

export const validate = (input) => {
    let errors = {};
    if (!input.username) {
        errors.username = "el nombre de usuario es obligatorio";
    } else {
        errors.username = "";
    }
    if (!input.name) {
        errors.name = "el nombre es obligatorio";
    } else {
        errors.name = "";
    }
    if (!input.lastname) {
        errors.lastname = "el apellido es obligatorio";
    } else {
        errors.lastname = "";
    }

    if (!input.email) {
        errors.email = "el email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "el mail es invalido";
    } else {
        errors.email = "";
    }
    if (!input.birth) {
        errors.birth = "la fecha de nacimiento es obligatoria";
    } else {
        errors.birth = "";
    }
    return errors;
};

export default function UserEdit() {

    const userData= useSelector(state => state.userData)


    const [errormsg, setErrormsg] = useState({
        errorUsername: "",
        errorEmail: ""
    })


    const [input, setInput] = useState({
        username: "" || userData.username,
        name: "" || userData.name,
        lastname: "" || userData.lastname,
        email: "" || userData.email,
        birth: "" || userData.birth
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [redirect, setRedirect] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory()

    async function handleDelete(){
     await   dispatch(deleteUser(userData.id))
     dispatch(signOutUser())
     history.push('/register')
     localStorage.removeItem('token')
    }

    function onFocus(ev) {
        setTouched({
            ...touched,
            [ev.target.name]: true,
        });
    }

    function handleChange(e) {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        });
        setErrors(
            validate({
                ...input,
                [name]: value
            })
        );
        setErrormsg({
            errorUsername: "",
            errorEmail: ""
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        if (
            !errors.email &&
            !errors.name &&
            !errors.birth &&
            !errors.lastname
        ) {
            axios
                .put(`http://localhost:3001/user/${userData.id}`, input)
                .then(async (res) => {
                        if (res.data.msgUsername) {
                            setErrormsg({ ...errormsg, errorUsername: res.data.msgUsername });
                        } else if (res.data.msgEmail) {
                            setErrormsg({
                                ...errormsg,
                                errorEmail: res.data.msgEmail,
                            });
                        }
                        else{
                            alert('Cuenta modificada')
                            setRedirect(true);
                        }
                    
                })
        
        }
    }
    if(redirect) return <Redirect to = "/about"></Redirect>

    return (
        <div>
            <Navbar />
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.formul}>

                    <input
                        name="username"
                        value={input.username}
                        type="text"
                        placeholder="username"
                        onChange={handleChange}
                        onFocus={onFocus}
                        
                    />
                    {errors.username && touched.username && (
                        <p className={style.errorText}>{errors.username}</p>
                    )}
                    {
                        <div>
                            {errormsg && errormsg.errorUsername ? (
                                <span className={style.errorText}>
                                    {errormsg.errorUsername}
                                </span>
                            ) : null}
                        </div>
                    }


                    <input
                        name="name"
                        value={input.name}
                        type="text"
                        placeholder="name"
                        onChange={handleChange}
                        onFocus={onFocus}
                    />
                    {errors.name && touched.name && (
                        <p className={style.errorText}>{errors.name}</p>
                    )}

                    <input
                        name="lastname"
                        value={input.lastname}
                        type="text"
                        placeholder="lastname"
                        onChange={handleChange}
                        onFocus={onFocus}
                    />
                    {errors.lastname && touched.lastname && (
                        <p className={style.errorText}>{errors.lastname}</p>
                    )}

                    <input
                        name="email"
                        value={input.email}
                        placeholder="email"
                        onChange={handleChange}
                        onFocus={onFocus}
                    />
                    {
                        <div>
                            {errormsg && errormsg.errorEmail ? (
                                <span className={style.errorText}>
                                    {errormsg.errorEmail}
                                </span>
                            ) : null}
                        </div>
                    }
                    {errors.email && touched.email && (
                        <p className={style.errorText}>{errors.email}</p>
                    )}

                    <input
                        name="birth"
                        value={input.birth}
                        valueDefault={userData.birth}
                        type="date"
                        placeholder="birth"
                        onChange={handleChange}
                        onFocus={onFocus}
                    />
                    {errors.birth && touched.birth && (
                        <p className={style.errorText}>{errors.birth}</p>
                    )}
                    {/* <label>Photo</label>
                <input 
                name= "profilePic"
                value = {input.profilePic}
                //placeholder="ingresa tu nombre"
                onChange={handleChange}
                />               */}

                    <input
                        type="submit"
                        value="Edit"
                        className={style.btn}
                    />

                </form>
                
            </div>
            <div onClick={handleDelete}>
                    <img src={imgDelete} alt="img-delete" className={style.imgDelete}/>
                </div>
            
        </div>
    )
}