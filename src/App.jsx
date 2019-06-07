import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import * as firebase from "firebase/app";
import "firebase/auth";
// import Log from './containers/Log/Log';
// import Footer from './containers/Footer/Footer';
// import Settings from './containers/Settings/Settings';
// import Auth from './containers/Auth/Auth';
// import User from './containers/User/User';
// import Admin from './containers/Admin/Admin';

const styles = theme => ({});

class App extends Component {

  componentDidMount (){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log ('logged in');
      } else {
        console.log ('NOT logged in');
      }
    });
  }

  componentWillUnmount(){
    this.fireBaseListener && this.fireBaseListener();
    this.authListener = undefined;
  }

  render() {
    const {
      userEntity,
    } = this.props;

    return (
      <React.Fragment>
        { userEntity.firebaseUser === null ? 
          // <Auth />
          `NOT Authed`
        :
          `Hello user.`
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
	return {
    userEntity: store.userEntity.userEntityState,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    // logUpdateMood: (mood) => dispatch(logUpdateMood(mood)),
	};
};

export default (
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(withRouter(withStyles(styles, { withTheme: true })(App)))
);
