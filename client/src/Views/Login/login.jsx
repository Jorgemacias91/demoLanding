import React, {useState} from 'react'
import style from './login.module.css'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import {Redirect, useHistory} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import signInUsers from '../../Actions/signInUsers'
export default function Login() {

    const history = useHistory()
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        username:"",
        password:""
    })

    const [error, setError] = useState();
    const [redirect, setRedirect] = useState(false);
    const [errorreq, setErrorreq] = useState({
        username:"",
        password:""
    })

    function handleChange(e){
        const {name, value} = e.target
        setInput({
            ...input,
            [name] : value
        })
        setErrorreq({
            username:"",
            password:""
        })
        setError("")
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(input.username && input.password){
            await axios
            .post("http://localhost:3001/user/signin", input)
            .then(result => {
                if(result.data.auth){
                    localStorage.setItem("token", result.data.token);
                    setRedirect(true);
                    dispatch(signInUsers(result.data));
                    console.log(result.data)
                }else{
                    setError(result.data)
                }
            }) 
        }
        else{
            var errors = {username:"", password:""};
            if(!input.username){
                errors.username = "El campo es requerido";  
            }
            if(!input.password){
                errors.password = "La contraseña es requerida"
            }
            setErrorreq({
                username:errors.username,
                password:errors.password
            })
        }
    }

    if(redirect){
        return <Redirect to="/"></Redirect>
    }

    return (
        <div>
            <Navbar/>
        <div className={style.container}>
            <main className="form-signin">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="username" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange} name="username" value={input.username}/>
                        <label for="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} name="password" value={input.password}/>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
      </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">2021</p>
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => history.push('/register')}>Register</button>
                </form>
            </main>
        </div>
        <Footer/>
        </div>
    )
}