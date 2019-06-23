import React, { Component } from 'react';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import dispatchAction from '../../store/dispatchAction';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './AppShell.Style';
import muiTheme from '../../theme/mui';
import { 
  MuiThemeProvider, 
  createMuiTheme 
} from '@material-ui/core/styles';
import {
    AppBar,
    Card,
    Fab,
    Toolbar,
    Tooltip,
} from '@material-ui/core/';
// import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Refresh';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';

import { 
    NewIssue,
    FirebaseUIAuth,
    Setup,
} from '../index';


class AppShell extends Component {

    getAppShell () {
        const {
            classes, 
            user
        } = this.props;
        // console.log ('getAppShell -> user', user);
        
        return (
            <React.Fragment>
                <div className={cn(classes.app)}>
                <Card className={cn(classes.card, classes.hundredHigh)}>
                    { user === null ? <FirebaseUIAuth /> : <Setup /> }
                </Card>
                        
                    <AppBar 
                        position="fixed"                 
                        color={`secondary`} 
                        className={cn(classes.appBar, classes.bottomAppBar)}>
                        <Toolbar>
                            {/* <IconButton edge="start" color="inherit" aria-label="Open drawer">
                                <MenuIcon />
                            </IconButton> */}
                            <Tooltip title={`START OVER`}>
                                <Fab 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        firebase.auth().signOut();
                                        dispatchAction({type: `STARTOVER`});
                                    }}
                                    color="primary" 
                                    aria-label="STARTOVER" 
                                    className={classes.fabButton}>
                                    <AddIcon />
                                </Fab>
                            </Tooltip>
                            <div className={classes.grow} />
                            {/* <IconButton color="inherit">
                                <SearchIcon />
                            </IconButton>
                            <IconButton edge="end" color="inherit">
                                <MoreIcon />
                            </IconButton> */}
                        </Toolbar>
                    </AppBar>

                </div>
            </React.Fragment>
        );
    }
    render (){
        const theme = createMuiTheme( muiTheme );
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <NewIssue />
                    
                    {this.getAppShell()}
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        store,
        auth: store.auth,
        user: store.auth.user,
	};
};

export default (
	connect(
		mapStateToProps,
        null
	)(withStyles(styles, { withTheme: true })(AppShell))
);