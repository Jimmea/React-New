import React, {PropTypes} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../Main';

const PrivateRoute = ({component:Component, isAuthenticated, ...rest}) => {
    return <Route {...rest} render={props => (
        isAuthenticated  ? (
            <Main>
                <Component {...props} />
            </Main>
        ) :
        (
            <Redirect to={{
                pathname: '/login',
                state : {from:props.location}
            }}/>
        )
    )}/>
};

export default PrivateRoute;