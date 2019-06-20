import React, { Component } from 'react';
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
    IconButton,
    Toolbar,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import { 
    NewIssue,
    Confirm,
    // Login,
    Setup,
} from '../index';


class AppShell extends Component {

    getAppShell () {
        const {
            classes, 
            // user
        } = this.props;
        
        // console.log ('getAppShell -> user', user);
        
        return (
            <React.Fragment>
                <div className={cn(classes.app)}>
                <Card className={cn(classes.card, classes.pageObj)}>
                    {/* { user === null ? <Login /> : null } */}
                    <Setup />
                </Card>
                        
                    <AppBar 
                        position="fixed"                 
                        color={`secondary`} 
                        className={cn(classes.appBar, classes.bottomAppBar)}>
                        <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Fab 
                            onClick={(e) => {
                                e.preventDefault();
                                dispatchAction({type: `SYSTEM/OPEN/NEWISSUE`});
                                // console.log ('newIssue');
                            }}
                            color="primary" 
                            aria-label="New Issue" 
                            className={classes.fabButton}>
                            <AddIcon />
                        </Fab>
                        <div className={classes.grow} />
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                            <MoreIcon />
                        </IconButton>
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
                    <Confirm />
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