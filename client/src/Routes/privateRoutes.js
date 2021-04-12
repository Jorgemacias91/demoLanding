import  {PrivateRoute}  from './helperRoute';
import {Redirect, Switch, Route} from 'react-router-dom'
import About from '../Views/About/about';
import EditUser from '../Views/UserEdit/userEdit'
import Home from '../Views/Home/home'
import Register from '../Views/Register/register'
import Feature from '../Views/Features/features'
import Contact from '../Views/Contact/contact'
import Login from '../Views/Login/login'
import Pricing from '../Views/Pricing/pricing'

export default function PrivateRoutes(props) {

    return (
        <Switch>
            <PrivateRoute path="/about" component={About}/>
            <PrivateRoute path="/editprofile" component={EditUser}/>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/register" component={Register} />
            <PrivateRoute path="/feature" component={Feature} />
            <PrivateRoute path="/contact" component={Contact} />
            <PrivateRoute path="/login" component={Login}/>
            <PrivateRoute path="/pricing" component={Pricing}/>
            <Redirect path="/**" to="/"/>
        </Switch>
    )
}