
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './AppShell.Style';
import {
    LoginForm,
} from '../index';

class AppShell extends Component {  
    
    render (){
        const { 
            classes
        } = this.props;
        const {
            user,
        } = this.props.store.auth;
        return (
            <div className={cn(classes.app)}>
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
