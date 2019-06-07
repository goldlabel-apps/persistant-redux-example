import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//   userEntityLogout,
// } from '../../store/userEntity/userEntity.actions';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'; 
import { styles } from './User.Style';   
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core/';
import moment from 'moment';
// import IconLogout from '@material-ui/icons/ExitToApp';
// import IconSend from '@material-ui/icons/RecordVoiceOver';

class User extends Component {

  render() {
    const { 
      classes,
      userEntity,
    } = this.props;
    const { user } = userEntity.firebaseUser;
    // console.log ('User', user);
    
    return (
      <React.Fragment>
        <div className={cn(classes.user, classes.maxPageWidth)}>
          <Grid container>
            <Grid item xs={12}>
              <Card className={cn(classes.userCard, classes.cardInner)}>
                <CardHeader
                  title={user.email}
                  subheader={`last login ${moment.unix(user.lastLoginAt/1000).fromNow()}`}
                />
                <CardContent>
                  <Typography variant={`body1`}>
                    uid: {user.uid}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
	return {
    userEntity: store.userEntity.userEntityState,
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
	)(withRouter(withStyles(styles, { withTheme: true })(User)))
);
