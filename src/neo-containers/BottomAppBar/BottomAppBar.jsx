import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './BottomAppBar.Style';
import cn from 'classnames';
import {
  AppBar,
  IconButton,
  Toolbar,
  Fab,
} from '@material-ui/core/';
import IconFab from '@material-ui/icons/Refresh';
import IconSettings from '@material-ui/icons/Settings';
import IconBack from '@material-ui/icons/Home';

function BottomAppBar(props) {
  const {
    classes,
  } = props;

  const showFab = true;
  const showSettings = false;
  const showReset = false;

  return (    
      <AppBar
        position={`fixed`}
        color={`primary`}
        className={cn(classes.appBar)}>

        

          <Toolbar className={classes.toolbar}>
          <div className={cn(classes.grow)} />
            {showFab ?
              <Fab
                color={`secondary`}
                className={cn(classes.fabButton)}
                onClick={(e) => {
                  e.preventDefault();
                  // open confirm
                  // window.location.assign(`/`);
                }}>
                <IconFab />
              </Fab>
              : null}
            <div className={cn(classes.bottomBarContrain)} >
              
              {showSettings ?
                <IconButton
                  color={`primary`}
                  onClick={(e) => {
                    e.preventDefault();
                    // console.log('Settings', Date.now())
                  }}>
                  <IconSettings />
                </IconButton>
                : null}


              {showReset ?
                <IconButton
                  color={`primary`}
                  onClick={(e) => {
                    e.preventDefault();
                    // console.log (history)
                    // history.push(`/`)
                  }}>
                  <IconBack />
                </IconButton>
                : null}

            </div>
        </Toolbar>

    </AppBar>
  );
}

const mapStateToProps = (store) => {
  return {
    store
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default (
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles, { withTheme: true })(BottomAppBar))
);
