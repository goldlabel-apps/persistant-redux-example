import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  logUpdateValidity,
  logSendUpdate,
} from '../../store/log/log.actions';
import {
  userEntityLogout,
  userEntityOpenSettings,
} from '../../store/userEntity/userEntity.actions';
import {
  appGotoEndpoint,
} from '../../store/app/app.actions';

import packageJSON from '../../../package.json';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'; 
import { styles } from './Footer.Style';   
import {
  AppBar,
  Fab, 
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core/';
import IconLogout from '@material-ui/icons/ExitToApp';
import IconSend from '@material-ui/icons/RecordVoiceOver';
import IconSettings from '@material-ui/icons/Settings';
import IconAdmin from '@material-ui/icons/Star';

class Footer extends Component {

  render() {
    const { 
      classes,
      log,
      userEntity,
      userEntityOpenSettings,
      userEntityLogout,
    } = this.props;
    return (
     <React.Fragment>
       <div className={cn(classes.center)}>
       <AppBar 
        position="fixed" 
        color={`primary`} 
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          
          <Typography 
            variant={`body1`}
            color={`inherit`}
            className={cn(classes.version)}>
            vs {packageJSON.version}
          </Typography>

          { log.valid && !log.sending ? 
            <Fab 
              color={`secondary`}
              className={classes.fabButton}
              onClick={(e) => {
                e.preventDefault();
                // logSendUpdate({
                //   userid:123,
                //   timestamp: Date.now(),
                // });
              }}>
              <IconSend />
            </Fab>
          : null}

          <div className={cn()}>
            
            { userEntity.firebaseUser.user.uid === process.env.REACT_APP_ADMIN_UID ?
              <IconButton
                color={`inherit`}
                onClick={(e) => {
                  e.preventDefault();
                  appGotoEndpoint(this.props.history, `admin`)
                }}>
                <IconAdmin />
              </IconButton>
            : null }
            
            <IconButton
              color={`inherit`}
              onClick={(e) => {
                e.preventDefault();
                userEntityOpenSettings();
              }}>
              <IconSettings />
            </IconButton>
            <IconButton
              color={`inherit`}
              onClick={(e) => {
                e.preventDefault();
                userEntityLogout();
              }}>
              <IconLogout />
            </IconButton>

          </div>

        </Toolbar>
      </AppBar>
       </div>
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
    userEntityLogout: () => dispatch(userEntityLogout()),
    userEntityOpenSettings: () => dispatch(userEntityOpenSettings()),
    appGotoEndpoint: (history, endpoint) => dispatch(appGotoEndpoint(history, endpoint)),
	};
};

export default (
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(withRouter(withStyles(styles, { withTheme: true })(Footer)))
);
