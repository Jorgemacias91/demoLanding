import  {PublicRoute}  from './helperRoute';
import Home from '../Views/Home/home'
import Register from '../Views/Register/register'
import Feature from '../Views/Features/features'
import Contact from '../Views/Contact/contact'
import Login from '../Views/Login/login'
import Pricing from '../Views/Pricing/pricing'
import {Redirect, Switch, Route} from 'react-router-dom'

export default function PublicRoutes() {

    return (
        <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute path="/register" component={Register} />
            <PublicRoute path="/feature" component={Feature} />
            <PublicRoute path="/contact" component={Contact} />
            <PublicRoute path="/login" component={Login}/>
            <PublicRoute path="/pricing" component={Pricing}/>
            <Redirect path="/**" to="/"/>
        </Switch>
    )
}
