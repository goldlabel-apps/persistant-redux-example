
import React, { Component } from 'react';
import { connect } from 'react-redux';
import dispatchAction from '../../store/dispatchAction';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FirebaseUIAuth.Style';
import cn from 'classnames';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
    Card,
    // CardContent,
    Typography,
} from '@material-ui/core/';
import { Formik } from 'formik';

class LoginStatus extends Component {

  // state = {
  //   isSignedIn: false,
  // };

  // uiConfig = {
  //   signInOptions: [
  //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //   ],
  //   callbacks: {
  //     signInSuccessWithAuthResult: () => false
  //   }
  // };

  componentDidMount() {
    // this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
    //     (user) => {
    //       this.setState({isSignedIn: !!user});
    //       if (user !== null){
    //         dispatchAction({type: `AUTH/USER_UPATE`, user});
    //       }
    //     }
    // );
  }
  
  componentWillUnmount() {
    // this.unregisterAuthObserver();
  }

  render (){
    const { 
        classes,
        store,
    } = this.props;
    
    return (
      <div className={cn(classes.login)}>
        <Card className={cn(classes.authUI)}>
          <Typography variant={`h5`}>
            {store.system.content.loginPage.title}
          </Typography>
          <Typography variant={`body1`} className={cn(classes.login)}>
            {store.system.content.loginPage.subTitle}
          </Typography>
          {/* <CardContent>
            <StyledFirebaseAuth 
              uiConfig={this.uiConfig} 
              firebaseAuth={firebase.auth()} 
            />
          </CardContent> */}
        </Card>
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