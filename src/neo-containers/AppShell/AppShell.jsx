
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    topConfirm,
  } from '../../store/actionCreators';
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
    BottomAppBar,
    Confirm,
    LoginForm,
    // Message,
} from '../index';
import {
    Grid,
    LinearProgress,
} from '@material-ui/core/';

class AppShell extends Component {

    componentDidMount () {
        const { 
            topConfirm,
        } = this.props;
        topConfirm (false);
    }
    
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
                <Confirm />
                {/* <Message /> */}
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      topConfirm,
    }, dispatch);
  };

const mapStateToProps = (store) => {
	return {
        store,
        loading: store.top.loading,
	};
};

export default (
	connect(
		mapStateToProps,
        mapDispatchToProps
	)(withStyles(styles, { withTheme: true })(AppShell))
);
