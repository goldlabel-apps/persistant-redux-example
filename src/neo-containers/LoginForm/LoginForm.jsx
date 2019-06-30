
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './LoginForm.Style';
import githubLogo from '../../theme/svg/github.svg'
import {
    Button,
    Grid,
    TextField,
    Typography,
} from '@material-ui/core/';

class LoginForm extends Component {

    validate = () => {
        console.log ('isValid ')
    }

    render (){
        const { 
            classes,
            loginPage,
            auth,
        } = this.props;
        const {
            username,
            password
        } = auth;
        console.log ('LoginForm', username);

        return (
            <form
                name={`login`} 
                className={cn(classes.login)} 
                noValidate
                autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={12} className={cn(classes.githubLogoGrid)}>
                        <img 
                            className={cn(classes.githubLogo)}
                            alt={`Github Logo`}
                            src={githubLogo}
                        />
                    </Grid>
                    <Grid item xs={12} className={cn(classes.siteName)}>
                        <Typography variant={`h5`}>
                            {loginPage.title}
                        </Typography>
                        <Typography variant={`body1`}>
                            {loginPage.subTitle}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            className={cn(classes.textField)}
                            fullWidth
                            autoFocus
                            required
                            id={`username`}
                            label={`Username`}
                            variant="outlined"
                            value={username}
                            onKeyPress={(e) => {
                                console.log(`Pressed keyCode ${e.key}`);
                                if (e.key === 'Enter') {
                                    // Do code here
                                    e.preventDefault();
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            className={cn(classes.textField)}
                            fullWidth
                            required
                            value={password}
                            id={`password`}
                            label={`Password`}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button    
                            fullWidth
                            className={cn(classes.loginBtn)}
                            variant={`outlined`}
                            color={`primary`}
                            aria-label={`login`}>
                                Login
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
        loginPage: store.system.content.loginPage,
	};
};

export default (
	connect(
		mapStateToProps,
        null
	)(withStyles(styles, { withTheme: true })(LoginForm))
);