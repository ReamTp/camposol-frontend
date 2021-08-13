import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}
