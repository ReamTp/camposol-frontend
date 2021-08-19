import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from '@views/Login';
import MainPageRouter from '@hocs/MainPageRouter';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/" component={MainPageRouter}/>
                <Route path="*">
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
