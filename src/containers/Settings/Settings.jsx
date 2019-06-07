import packageJSON from '../../../package.json';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  logUpdateValidity,
  logSendUpdate,
} from '../../store/log/log.actions';
import {
  appOpenLink
} from '../../store/app/app.actions';
import { 
  userEntityCloseSettings,
  userEntityLogout,
} from '../../store/userEntity/userEntity.actions';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'; 
import { styles } from './Settings.Style';   
import {
  Avatar,
  Slide,
  Dialog,
  AppBar,
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Footer extends Component {

  render() {
    const { 
      classes,
      userEntity,
      userEntityCloseSettings,
      appOpenLink,
      userEntityLogout,
    } = this.props;
    return (
     <React.Fragment>

        <Dialog
          fullScreen
          open={userEntity.settings}
          onClose={userEntityCloseSettings}
          TransitionComponent={Transition}
        >
          <AppBar className={cn(classes.appBar)}>
            <Toolbar>
              <IconButton 
                color="inherit" 
                onClick={userEntityCloseSettings}>
                <CloseIcon />
              </IconButton>
              <Typography 
                variant="h6" 
                color="inherit" 
                className={classes.flex}>
                Settings
              </Typography>
              <Button 
                color="inherit" 
                onClick={userEntityCloseSettings}>
                Close
              </Button>
            </Toolbar>
          </AppBar>

          <Grid container>
            <Grid item xs={12}>

            <Button 
            className={cn(classes.signOut)}
            size={`large`}
            variant={`contained`}
            color={`primary`}
            onClick={(e) => {
              e.preventDefault();
              userEntityLogout();
              userEntityCloseSettings();
            }}>
            Sign Out
          </Button>

          <Button 
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              appOpenLink({
                url: packageJSON.repository.url,
                target: `_blank`,
                icon: `link`
              });
            }}>
            <Avatar src={`/png/octocat.png`} />
          </Button>

            </Grid>
          </Grid>





        </Dialog>
       
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
	return {
    userEntity: store.userEntity.userEntityState,
    log: store.log.logState,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    logUpdateValidity: (bool) => dispatch(logUpdateValidity(bool)),
    logSendUpdate: (log) => dispatch(logSendUpdate(log)),
    userEntityCloseSettings: () => dispatch(userEntityCloseSettings()),
    appOpenLink: (link) => dispatch(appOpenLink(link)),
    userEntityLogout: () => dispatch(userEntityLogout()),
	};
};

export default (
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(withRouter(withStyles(styles, { withTheme: true })(Footer)))
);
