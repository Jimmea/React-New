import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes'
import store from './stores';
// import {authCheck} from './stores/actions/auth'
// store.dispath();
// store.dispath(authCheck());

const App = () => {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
};

export default App;
