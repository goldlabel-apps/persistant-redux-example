
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    authUpdate 
} from '../../store/actionCreators';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './LoginForm.Style';
import {
    Button,
    Checkbox,
    Grid,
    SvgIcon,
    TextField,
    Tooltip,
} from '@material-ui/core/';

class LoginForm extends Component {

    validate = (username, password) => {
        let isValid = true;
        if (username === '' || username.length < 2){
            isValid = false;
        }
        if (password === '' || password.length < 2){
            isValid = false;
        }
        return isValid;
    }

    onUpdate = (payload) => {
        const { authUpdate } = this.props;
        const newUsername = document.getElementById(`username`).value;
        const newPassword = document.getElementById(`password`).value;
        let newRemember = document.getElementById(`remember`).value;
        if (payload.key === `remember`){
            newRemember = !payload.value;
        }
        newRemember = Boolean(newRemember);
        let newCredentials = {
            username: newUsername,
            password: newPassword,
            valid: this.validate(newUsername, newPassword),
            remember: newRemember
        }
        authUpdate (newCredentials);
    }

    render (){
        const { 
            classes,
            auth,
        } = this.props;
        const {
            username,
            password,
            remember,
            valid
        } = auth.credentials[0];

        // console.log ('username', username);
        // console.log ('password', password);
        // console.log ('valid', valid);
        // console.log ('remember', remember);

        return (
            <form
                name={`login`} 
                className={cn(classes.loginForm)} 
                noValidate
                autoComplete="off">
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <TextField
                            className={cn(classes.textField)}
                            fullWidth
                            autoFocus
                            required
                            id={`username`}
                            label={`GitHub username or email`}
                            variant="outlined"
                            value={username}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    this.onUpdate({key: `enterpress`, value: null});
                                }
                            }}
                            onChange={(e) => {
                                e.preventDefault();
                                this.onUpdate({key: `username`, value: e.target.value});
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={cn(classes.textField)}
                            fullWidth
                            required
                            value={password}
                            id={`password`}
                            type={`password`}
                            label={`Password`}
                            variant="outlined"
                            onChange={(e) => {
                                e.preventDefault();
                                this.onUpdate({key: `password`, value: e.target.value});
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item>
                                <Checkbox
                                    checked={remember}
                                    id={`remember`}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        this.onUpdate({key: `remember`, value: e.target.value});
                                    }}
                                    value={remember}
                                    color="default"
                                    inputProps={{
                                        'aria-label': 'remember',
                                    }}
                                />
                            </Grid>

                            <Grid item className={cn(classes.rememberText)}>
                                remember?
                            </Grid>

                            <Grid item className={cn(classes.rememberHelp)}>
                                <Tooltip placement="top" title={`Checking 'Remember Me' reduces the number 
                                of times you're asked to log in. To keep your account secure, only use 
                                this option on your personal device.`}>
                                    <SvgIcon>
                                    <g id="help" stroke="none" fill="none">
                                        <g id="baseline-help_outline-24px" transform="translate(-2.000000, -2.000000)">
                                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                            <path d="M11,18 L13,18 L13,16 L11,16 L11,18 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z M12,6 C9.79,6 8,7.79 8,10 L10,10 C10,8.9 10.9,8 12,8 C13.1,8 14,8.9 14,10 C14,12 11,11.75 11,15 L13,15 C13,12.75 16,12.5 16,10 C16,7.79 14.21,6 12,6 Z" id="Shape" fill="#e0e0e0"></path>
                                        </g>
                                    </g>
                                    </SvgIcon>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            disabled={!valid}
                            fullWidth
                            className={cn(classes.loginBtn)}
                            variant={`contained`}
                            color={`default`}
                            aria-label={`login`}
                            onClick={(e) => {
                                e.preventDefault();
                                this.onUpdate({key: `signin`, value: null});
                            }}>
                                Sign in
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        auth: store.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        authUpdate
    }, dispatch);
  }

export default (
	connect(
		mapStateToProps,
        mapDispatchToProps
	)(withStyles(styles, { withTheme: true })(LoginForm))
);