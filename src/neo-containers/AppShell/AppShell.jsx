import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Fab,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core/';
import moment from 'moment';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';



const siteObj = {
    siteTitle: ``,
};

const pageObj = {
    title: `Login to Github`,
    avatar: {
        type: `png`,
        title: `octocat`,
        path: `https://firebasestorage.googleapis.com/v0/b/agile-pwa.appspot.com/o/octocat.png?alt=media&token=3c50d8c0-1a0c-4549-b36b-b834464c1590`,
    },
    media: {
        type: `jpg`,
        title: `Gherkin on a fork`,
        path: `https://firebasestorage.googleapis.com/v0/b/agile-pwa.appspot.com/o/gherkin-on-a-fork.jpg?alt=media&token=0a9b78de-afc2-4659-8898-f0d34d885460`,
    }
};

class AppShell extends Component {
    // componentDidMount () {
    //     console.log ('AppShell');
    // }
    getAppShell () {
        const {
            classes, 
            store
        } = this.props;
        console.log ('getAppShell -> store', store);
        return (
            <React.Fragment>
                <div className={cn(classes.app)}>
                <AppBar 
                    color={`secondary`}
                    position="static"
                    className={cn(classes.topAppBar)}>
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {siteObj.siteTitle}
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

                    <Card className={cn(classes.card, classes.pageObj)}>
                        <CardHeader
                            title={pageObj.title}
                            subheader={moment(Date.now()).format("ddd, MMMM Do, h:mm a")}
                            avatar={
                                <Avatar 
                                    aria-label={pageObj.avatar.title}
                                    src={pageObj.avatar.path} 
                                    className={cn(classes.avatar)} />
                            }
                        />
                        <CardMedia
                            className={cn(classes.media)}
                            image={pageObj.media.path}
                            title={pageObj.media.title}
                        />
                        <CardContent>
                            <Typography color="textSecondary" component="p">
                            </Typography>  
                        </CardContent>
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
                    {this.getAppShell()}
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        store
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        // logUpdateValidity: (bool) => dispatch(logUpdateValidity(bool)),
	};
};

export default (
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(withStyles(styles, { withTheme: true })(AppShell))
);