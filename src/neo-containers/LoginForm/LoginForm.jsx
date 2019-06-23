
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './LoginForm.Style';
import githubLogo from '../../theme/svg/github.svg'
import {
    Button,
    TextField,
    Grid,
} from '@material-ui/core/';
// import moment from 'moment';
// import MenuIcon from '@material-ui/icons/Menu';
// import AddIcon from '@material-ui/icons/Add';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';

class LoginForm extends Component {

    validate = () => {
        console.log ('isValid ')
    }

    render (){
        const { classes } = this.props;
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
                    <Grid item xs={12} sm={4}>
                        <TextField
                            className={cn(classes.textField)}
                            fullWidth
                            autoFocus
                            required
                            id={`username`}
                            label={`Username`}
                            variant="outlined"
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

export default withStyles(styles, { withTheme: true })(LoginForm);