import React, { useState } from 'react';
import style from './register.module.css'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import signInUsers from '../../Actions/signInUsers'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

export const validate = (input) => {
    let errors = {};
    if (!input.username) {
        errors.username = "el nombre de usuario es obligatorio";
    } else {
        errors.username = "";
    }

    if (!input.password) {
        errors.password = "la contraseña es obligatoria";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input.password)) {
        errors.password =
            `debe contener minimo 8 caracteres, una mayuscula y un numero`;
    } else {
        errors.password = "";
    }

    if (!input.password2) {
        errors.password2 = "repetir la contraseña es obligatorio";
    } else if (input.password2 !== input.password) {
        errors.password = "las contraseñas no coinciden";
    } else {
        errors.password2 = "";
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

export default function Register() {


    const [errormsg, setErrormsg] = useState({
        errorUsername: "",
        errorEmail: ""
    })


    const [input, setInput] = useState({
        username: "",
        name: "",
        lastname: "",
        password: "",
        email: "",
        birth: ""
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [redirect, setRedirect] = useState(false)

    const dispatch = useDispatch();

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
            !errors.password2 &&
            !errors.email &&
            !errors.password &&
            !errors.name &&
            !errors.birth &&
            !errors.lastname
        ) {
            axios
                .post(`http://localhost:3001/user`, input)
                .then(async (res) => {

                    if (res.data.auth === true) {
                        await dispatch(signInUsers(res.data.user));
                        alert("Cuenta registrada");
                        localStorage.setItem("token", res.data.token);

                        setRedirect(true);
                    } else {
                        if (res.data.msgUsername) {
                            // console.log(res);
                            setErrormsg({ ...errormsg, errorUsername: res.data.msgUsername });
                        } else if (res.data.msgEmail) {
                            setErrormsg({
                                ...errormsg,
                                errorEmail: res.data.msgEmail,
                            });
                        }
                    }
                })
                .catch((error) => {
                    alert("No se pudo crear la cuenta");
                    console.log(error);
                });
        } else {
            alert("No se registró la cuenta");
        }
    }
    if(redirect) return <Redirect to = "/"></Redirect>

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
                        name="password"
                        value={input.password}
                        type="password"
                        placeholder="password"
                        onChange={handleChange}
                        onFocus={onFocus}
                    />
                    {errors.password && touched.password && (
                        <p className={style.errorText}>{errors.password}</p>
                    )}

                    <input
                        name="password2"
                        value={input.password2}
                        type="password"
                        placeholder="repeat password"
                        onChange={handleChange}
                        onFocus={onFocus}
                    />
                    {errors.password2 && touched.password2 && (
                        <p className={style.errorText}>{errors.password2}</p>
                    )}

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
                        value="Enviar"
                    />

                </form>
            </div>
            
        </div>
    )
}