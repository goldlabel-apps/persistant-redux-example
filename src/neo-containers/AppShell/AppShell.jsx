
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './AppShell.Style';
import {
    LoginForm,
} from '../index';
import {
    LinearProgress,
} from '@material-ui/core/';

class AppShell extends Component {  
    
    render (){
        const { 
            classes
        } = this.props;
        const {
            user,
        } = this.props.store.auth;
        const loading = false;
        return (
            <div className={cn(classes.app)}>
                <div className={cn(classes.loading)}>

                </div>
                { loading ? <LinearProgress /> : null}
                
                { user === null ? 
                    <LoginForm /> 
                : 
                    <div>hello</div>
                }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        store,
	};
};

export default (
	connect(
		mapStateToProps,
        null
	)(withStyles(styles, { withTheme: true })(AppShell))
);
