
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import dispatchAction from '../../store/dispatchAction';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FirebaseUIAuth.Style';
import cn from 'classnames';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase/app';
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

          <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>      

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