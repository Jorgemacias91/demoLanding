import React, {useEffect} from 'react'
import style from './App.module.css';
import {Route} from 'react-router-dom'
import Home from './Views/Home/home'
import Register from './Views/Register/register'
import Feature from './Views/Features/features'
import Contact from './Views/Contact/contact'
import About from './Views/About/about'
import Login from './Views/Login/login'
import Pricing from './Views/Pricing/pricing'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import signInUsers from './Actions/signInUsers'
import EditUser from './Views/UserEdit/userEdit'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    var token = localStorage.getItem("token"); 
    async function request() {
      if (!localStorage.getItem("token")) {
        return;
      } else {
        axios
          .post("http://localhost:3001/user/userdata/token", {
            headers: {
              Authorization: `${token}`,
            },
          })
          .then(async (result) => {
            await dispatch(signInUsers(result.data));
          });
      }
    }
    request();
  }, []);

  return (
    <div className={style.App}>

      <Route exact path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/feature" component={Feature}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/editprofile" component={EditUser}/>

    
     
      
    </div>
  );
}

export default App;
