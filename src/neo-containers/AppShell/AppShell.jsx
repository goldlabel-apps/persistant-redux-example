import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './AppShell.Style';
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
    siteTitle: `Agile PWA`,
};

const pageObj = {
    title: `Welcome`,
    avatar: {
        type: `png`,
        title: `Jigsaw Piece`,
        path: `https://firebasestorage.googleapis.com/v0/b/agile-pwa.appspot.com/o/icon.png?alt=media&token=6c465046-cd83-400c-b83c-26d748ed9a0e`,
    },
    media: {
        type: `png`,
        title: `Killer PWA`,
        path: `https://firebasestorage.googleapis.com/v0/b/agile-pwa.appspot.com/o/KillerPWA.png?alt=media&token=e854f930-ad3b-4e09-a567-70cef755acf7`,
    }
};

class AppShell extends Component {
    // componentDidMount () {
    //     console.log ('AppShell');
    // }
    render () {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={cn(classes.app)}>
                <AppBar position="static">
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

                    <Card className={cn(classes.card)}>
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
                            <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>

                    </Card>


                    <AppBar position="fixed" color="primary" className={classes.appBar}>
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
}

export default withStyles(styles, { withTheme: true })(AppShell);