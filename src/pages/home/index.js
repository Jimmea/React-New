import React from 'react';
import {connect} from 'react-redux'
import Page from './Page';

const mapStateToProps = reducer => {
    return {
        information  : reducer.user.information
    }
}
export default connect(mapStateToProps)(Page);