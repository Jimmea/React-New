import React from 'react';
import { Router, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import routes from './routes';
import PrivateRoute from './Private';
import PublicRoute from './Public';

const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                {
                    routes.map((route, i) => {
                        if(route.auth)
                        {
                            return <PrivateRoute key={i} {...route}/>
                        }

                        return <PublicRoute key={i} {...route} />
                    })
                }
            </Switch>
        </Router>
    );
};

export default Routes;