import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './AppShell.Style';
import {
    Typography,
  } from '@material-ui/core/';

class AppShell extends Component {
    // componentDidMount () {
    //     console.log ('AppShell');
    // }
    render () {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={cn(classes.app)}>
                    <Typography variant="h1">
                        App Shell
                    </Typography>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AppShell);