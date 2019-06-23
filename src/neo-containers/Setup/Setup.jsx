
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './Setup.Style';
import {
//    Avatar,
    IconButton,
    Card,
    CardContent,
    CardHeader,
    Tooltip,
} from '@material-ui/core/';
import IconRestart from '@material-ui/icons/Refresh';
import dispatchAction from '../../store/dispatchAction';
import { Orgs } from './Orgs';

class Setup extends Component {

    render (){
        const { 
            classes,
            user,
        } = this.props;
        console.log ('orgsHidden', user.orgsHidden)
        return (
            <div className={cn(classes.setup)}>
                <Card className={cn(classes.card, classes.hundredHigh)}>
                    <CardHeader
                        title={user.username}
                        subheader={user.email}
                        // avatar={
                        //     <Avatar 
                        //         aria-label={`GitHub`}
                        //         src={`/png/octocat.png`} 
                        //         className={cn(classes.avatar)} />
                        // }
                        action={
                            <Tooltip title={`Start Over`}>
                                <IconButton
                                    color={`inherit`}
                                    aria-label={`Start Over`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatchAction({type:`STARTOVER`});
                                    }}
                                >
                                    <IconRestart />
                                </IconButton>
                            </Tooltip>
                        }
                    />
                    <CardContent>
                       <Orgs orgs={user.orgs} classes={classes} />
                    </CardContent>

                </Card>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        user: store.user,
	};
};

export default (
	(connect(
		mapStateToProps, null
	)(withStyles(styles, { withTheme: true })(Setup)))
);