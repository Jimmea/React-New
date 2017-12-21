import {AUTH_LOGOUT} from '../actions/actions_types';

const initialState = Object.assign({}, {
    isAuthenticate : false,
    information: {
        name : 'hung',
        age : 23,
        sex: 'Mail',
        job : 'programming'
    }
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGOUT:
            return unsetUser(state);
    }
    return state;
}


function unsetUser(state)
{
    return state;
}

export default reducer;
