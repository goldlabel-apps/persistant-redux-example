
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FirebaseUIAuth.Style';
import cn from 'classnames';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
    Button,
    Card,
    CardContent,
    // CardHeader,
    // IconButton,
    Typography,
} from '@material-ui/core/';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

class ScreenFirebaseUI extends Component {

  state = {
    isSignedIn: false,
  };

  uiConfig = {
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => {
          this.setState({isSignedIn: !!user});
          if (user !== null){
            // console.log (user);
            this.props.runDocsify(null);
          }
        }
    );
  }
  
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render (){
    const { 
        classes,
        docsifyObj,
    } = this.props;
    const {
      authTitle,
      authInstruction,
    } = docsifyObj;
    // console.log ('ScreenFirebaseUI', authTitle, authInstruction);
    if (!this.state.isSignedIn) {
        return (
          <Card className={cn(classes.authUI)}>
            {/* <CardHeader
              title={authTitle}
              subheader={authInstruction}
              action={
                <IconButton aria-label="Settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />   */}
            <Typography variant={`h5`}>
              {authTitle}
            </Typography>
            <Typography variant={`body1`}>
              {authInstruction}
            </Typography>
            <CardContent>
              <StyledFirebaseAuth 
                uiConfig={this.uiConfig} 
                firebaseAuth={firebase.auth()} 
              />
            </CardContent>
          </Card>
        );
      }
      return (
        <div className={cn(classes.authUI)}>
            <Button
                variant={`outlined`}
                color={`primary`}
                onClick={() => {
                  firebase.auth().signOut();
                  window.location.assign(`/`);
                }}>
                    Logout {firebase.auth().currentUser.displayName}
            </Button>
        </div>
      );
    }
}

const mapStateToProps = (store) => {
	return {
        docsifyObj: store.docsify.docsifyObj,
        firebaseConfig: store.top.firebaseConfig,
	};
};

export default (
	connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(ScreenFirebaseUI))
);