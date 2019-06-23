
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

class LoginStatus extends Component {

  state = {
    isSignedIn: false,
  };

  uiConfig = {
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
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
            console.log (user);
            // this.props.runDocsify(null);
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
        store,
    } = this.props;
    
    // console.log (store.system.content.loginPage.title);

    if (!this.state.isSignedIn) {
        return (
          <Card className={cn(classes.authUI)}>
            <Typography variant={`h5`}>
              {store.system.content.loginPage.title}
            </Typography>
            <Typography variant={`body1`}>
              {store.system.content.loginPage.subTitle}
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
        store,
        firebaseConfig: store.top.firebaseConfig,
	};
};

export default (
	connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(LoginStatus))
);