import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//   appGotoEndpoint,
// } from '../../store/app/app.actions';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'; 
import { styles } from './Admin.Style';   
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core/';

class Admin extends Component {

  componentDidMount () {
    const { 
      userEntity,
      // appGotoEndpoint,
    } = this.props;
    if (userEntity.firebaseUser.user.uid !== process.env.REACT_APP_ADMIN_UID){
      // appGotoEndpoint(this.props.history, `/`)
    }
  }
  
  render() {
    const { 
      classes,
    } = this.props;
    
    return (
      <React.Fragment>
        <div className={cn(classes.user, classes.maxPageWidth)}>
          <Grid container>
            <Grid item xs={12}>
              <Card className={cn(classes.userCard, classes.cardInner)}>
                <CardHeader
                  title={`Admin`}
                  subheader={`subheader`}
                />
                <CardContent>
                  <Typography variant={`body1`}>
                    lorem ipsum
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
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
    // appGotoEndpoint: (history, endpoint) => dispatch(appGotoEndpoint(history, endpoint)),
	};
};

export default (
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(withRouter(withStyles(styles, { withTheme: true })(Admin)))
);
