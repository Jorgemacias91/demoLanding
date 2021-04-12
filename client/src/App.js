import React, {useEffect} from 'react'
import style from './App.module.css';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import signInUsers from './Actions/signInUsers'
import PublicRoutes from './Routes/publicRoutes'
import PrivateRoutes  from './Routes/privateRoutes';



function App(props) {
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
            await dispatch(signInUsers(result.data))
          });
      }
    }
    request();
  }, []);

  const username = useSelector(state => state.userData.username)

  return (

    <div className={style.App}>
{
  username ?
  <PrivateRoutes/>
  :
<PublicRoutes/>
} 
      
    </div>
  );
}

export default App;
