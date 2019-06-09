
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './Login.Style';
// import muiTheme from '../../theme/mui';
// import {
//     Typography,
// } from '@material-ui/core/';
// import moment from 'moment';
// import MenuIcon from '@material-ui/icons/Menu';
// import AddIcon from '@material-ui/icons/Add';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';

class Login extends Component {
    render (){
        const { classes } = this.props;
        return (
            <div className={cn(classes.login)}>
                {`Login`}
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Login);