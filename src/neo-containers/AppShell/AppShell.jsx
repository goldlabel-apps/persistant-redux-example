import React, { Component } from 'react';
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
        const {classes} = this.props;
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
                            subheader={moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a")}
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
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
                        <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
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

export default withStyles(styles, { withTheme: true })(AppShell);