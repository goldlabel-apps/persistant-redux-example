import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './AppShell.Style';
import {
    Typography,
  } from '@material-ui/core/';

class AppShell extends Component {
    // componentDidMount () {
    //     console.log ('AppShell');
    // }
    render () {
        return (
            <React.Fragment>
                <Typography variant="h1">
                    App Shell
                </Typography>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AppShell);