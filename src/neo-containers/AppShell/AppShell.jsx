
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../theme/svg/logo.svg';
import muiTheme from '../../theme/mui';
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './AppShell.Style';
import {
    LoginForm,
    BottomAppBar,
} from '../index';
import {
    Grid,
    LinearProgress,
} from '@material-ui/core/';

class AppShell extends Component {  
    
    render (){
        const { 
            classes,
            loading,
        } = this.props;
        const {
            user,
        } = this.props.store.auth;
        
        // console.log ('loading', loading);
        // const loading = false;

        const theme = createMuiTheme( muiTheme );
        
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <div className={cn(classes.loading)}>
                        { loading ? <LinearProgress /> : null}
                    </div>
                    <div className={cn(classes.app)}>
                        <Grid container>
                            <Grid item xs={12} className={cn(classes.iconGridItem)}>
                                <img src={logo} alt={`logo`}/>
                            </Grid>
                        </Grid>
                        { user === null ? 
                            <LoginForm /> 
                        : 
                            <div>hello</div>
                        }
                    </div>
                    <BottomAppBar />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        store,
        loading: store.top.loading,
	};
};

export default (
	connect(
		mapStateToProps,
        null
	)(withStyles(styles, { withTheme: true })(AppShell))
);
