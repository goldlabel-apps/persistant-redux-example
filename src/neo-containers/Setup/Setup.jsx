import React, { Component } from 'react';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './Setup.Style';
import {
    Avatar,
    IconButton,
    Card,
    CardContent,
    CardHeader,
    Tooltip,
} from '@material-ui/core/';
import IconRestart from '@material-ui/icons/ExitToAppRounded';
import dispatchAction from '../../store/dispatchAction';
// import { githubApiGetOrgs } from '../../store/sagas/githubApi';
// import { Orgs } from './Orgs';

class Setup extends Component {

    componentDidMount (){
        dispatchAction({type: `GITHUBAPI/GET/ORGS` });
        // dispatchAction({type:`GITHUB/API/PING`});
        // const {
        //     orgs,
        // } = this.props;
        // console.log(orgs);
        // if (orgs === null){
        //     /// dispatchAction({type:`GITHUBAPI/GET/ORGS`});
        // }
    }

    render (){
        const { 
            classes,
            user,
            orgs,
        } = this.props;
        // console.log (orgs);
        return (
            <div className={cn(classes.setup)}>
                <Card className={cn(classes.card, classes.hundredHigh)}>
                    <CardHeader
                        title={user.displayName}
                        subheader={user.email}
                        avatar={
                            <Avatar 
                                aria-label={`GitHub`}
                                src={user.photoURL} 
                                className={cn(classes.avatar)} />
                        }
                        action={
                            <Tooltip title={`Start Over`}>
                                <IconButton
                                    color={`inherit`}
                                    aria-label={`Start Over`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatchAction({type:`STARTOVER`});
                                        firebase.auth().signOut();
                                    }}
                                >
                                    <IconRestart />
                                </IconButton>
                            </Tooltip>
                        }
                    />
                    <CardContent>
                       {/* <Orgs orgs={user.orgs} classes={classes} /> */}

                       { JSON.stringify(orgs) }
                       
                    </CardContent>

                </Card>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        user: store.auth.user,
        orgs: store.githubApi.orgs,
	};
};

export default (
	(connect(
		mapStateToProps, null
	)(withStyles(styles, { withTheme: true })(Setup)))
);