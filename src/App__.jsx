import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
const styles = theme => ({});

class App extends Component {

  render() {
    // const {
    //   firestore,
    // } = this.props;
    // console.log ('firestore', firestore);
    return (
      <React.Fragment>
        App
      </React.Fragment>
    );
  }
}

export default compose(
  withFirebase,
  connect(({ firebase: { auth } }) => ({ auth }))
)(App)
