
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    authUpdate,
    authSignin,
} from '../../store/actionCreators';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './LoginForm.Style';
import {
    Button,
    Checkbox,
    Grid,
    IconButton,
    TextField,
    Tooltip,
    Typography,
} from '@material-ui/core/';
import IconHelp from '@material-ui/icons/HelpOutlined';

class LoginForm extends Component {

    signIn = () => {
        const { authSignin } = this.props;
        const username = document.getElementById(`username`).value;
        const password = document.getElementById(`password`).value;
        if (this.validate(username, password)){
            authSignin({username, password});
        }
    }

    openDocs = (url) => {
        console.log ('openDocs', url);
        let docsWindow = window.open(url, "docs", `
            location=1, 
            status=1, 
            scrollbars=1, 
            width=480,
            height=750
        `);
        docsWindow.moveTo(0, 0);
    }

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
        const { authing } = auth;
        const {
            username,
            password,
            remember,
            valid
        } = auth.credentials[0];


        // console.log ('authing', authing);
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
                    
                    {authing ? 
                        <Grid item xs={12}>
                            
                        </Grid>
                    : 
                    <React.Fragment>
                        <Grid item xs={12}>
                            <TextField
                                className={cn(classes.textField)}
                                fullWidth
                                autoFocus
                                required
                                id={`username`}
                                label={`GitHub username or email`}
                                variant="filled"
                                value={username}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        this.signIn();
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
                                variant="filled"
                                onChange={(e) => {
                                    e.preventDefault();
                                    this.onUpdate({key: `password`, value: e.target.value});
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                        <Grid container>

                            <Grid item className={cn(classes.rememberHelp)}>
                                <Tooltip placement="top" title={`Learn about User Entities`}>
                                    <IconButton
                                        variant={`text`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.openDocs(`https://docs.listingslab.com/#/md/listingslab/concepts/user_entities`);
                                        }}>
                                        <IconHelp className={cn(classes.white)} fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Grid>

                            <Grid item className={cn(classes.rememberText)}>
                                <Typography 
                                    variant={`caption`}
                                    className={cn(classes.white)}>
                                    Save credentials?
                                </Typography>
                            </Grid>
                            
                            
                            <Grid item>
                                <Checkbox
                                    color={`primary`}
                                    checked={remember}
                                    id={`remember`}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        this.onUpdate({key: `remember`, value: e.target.value});
                                    }}
                                    value={remember}
                                    inputProps={{
                                        'aria-label': 'remember',
                                    }}
                                />
                            </Grid>

                            <Grid item className={cn(classes.grow)} />
                                
                            <Grid item>
                                <Button
                                    disabled={!valid}
                                    className={cn(classes.loginBtn)}
                                    variant={`contained`}
                                    color={`secondary`}
                                    size={`large`}
                                    aria-label={`login`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.signIn();
                                        // this.onUpdate({key: `signin`, value: null});
                                    }}>
                                        Sign in
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>


                    
                    </React.Fragment>
                    }
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
        authUpdate,
        authSignin,
    }, dispatch);
  }

export default (
	connect(
		mapStateToProps,
        mapDispatchToProps
	)(withStyles(styles, { withTheme: true })(LoginForm))
);