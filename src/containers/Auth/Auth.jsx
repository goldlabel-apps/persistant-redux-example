import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  logUpdateValidity,
  logSendUpdate,
} from '../../store/log/log.actions';
import {
  userEntityLogin,
} from '../../store/userEntity/userEntity.actions';
import validateEmail from '../../utils/validateEmail';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'; 
import { styles } from './Auth.Style';   
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core/';

class Auth extends Component {

  state = {
    emailHelper:``,
    emailError: false,
    passwordHelper:``,
    passwordError: false,
  }

  onSubmit = () => {    
    const { 
      userEntityLogin,
    } = this.props;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let emailError = true;
    let emailHelper = ``;
    if (validateEmail(email)){
      emailHelper = ``;
      emailError = false;
    } else {
      emailHelper = `Please enter a valid email`;
    }
    let passwordError = true;
    let passwordHelper = ``;
    if (password.length > 4){
      passwordHelper = ``;
      passwordError = false;
    } else {
      passwordHelper = `Passwords must be at least 4 characters`;
    }
    this.setState({
      emailHelper,
      emailError,
      passwordHelper,
      passwordError,
    });
    if (!emailError && !passwordError){
      userEntityLogin(email, password);
    }

  }

  render() {
    const { 
      classes,
      userEntity,
    } = this.props;
    return (
     <React.Fragment>
        <div className={cn(classes.auth, classes.maxPageWidth)}>
        <Grid container>
          
          <Grid item xs={12}>
          { userEntity.authing ? 
            <div className={cn(classes.authing, classes.center)}>
              <CircularProgress
                className={cn(classes.authProgress)}
                color={`secondary`} />
              <Typography variant={`h5`} className={cn(classes.white)}>
                Authorising...
              </Typography>
            </div>  
          : 

          <React.Fragment>

            <Grid item xs={12} className={cn(classes.center)}>
              <img 
                alt={`HML`}
                className={cn(classes.authLogo)}
                src={`/png/android_icon.png`} 
              />
            </Grid>


          
          
          <Card className={cn(classes.authCard, classes.authInner)}>
            <CardHeader
                title={`Healey Mood Log`}
                subheader={`Login`}
              />
                <CardContent>

                <TextField
                  error={this.state.emailError}
                  className={cn(classes.emailField)}
                  autoFocus
                  required
                  fullWidth
                  id={`email`}
                  label={`Email`}
                  variant={`filled`}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      this.onSubmit();
                    }
                  }}
                  helperText={this.state.emailHelper}
                />

                <TextField
                  error={this.state.passwordError}
                  className={cn(classes.passwordField)}
                  type={`password`}
                  required
                  fullWidth
                  id={`password`}
                  label={`Password`}
                  variant={`filled`}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      this.onSubmit();
                    }
                  }}
                  helperText={this.state.passwordHelper}
                />

                <Button 
                  size={`large`}
                  fullWidth
                  variant={`contained`}
                  color={`primary`}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      this.onSubmit();
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    this.onSubmit();
                  }}>
                  Sign in
                </Button>

                </CardContent>
            </Card>
            </React.Fragment>
          
          }

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
    logUpdateValidity: (bool) => dispatch(logUpdateValidity(bool)),
    logSendUpdate: (log) => dispatch(logSendUpdate(log)),
    userEntityLogin: (email, password) => dispatch(userEntityLogin(email, password)),
	};
};

export default (
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(withRouter(withStyles(styles, { withTheme: true })(Auth)))
);
