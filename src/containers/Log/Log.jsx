import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  logUpdateMood,
  logUpdateFood,
  logUpdateMeds,
  logUpdateSleep,
  logUpdateValidity,
  logSent,
} from '../../store/log/log.actions';
import { 
  userEntityOpenSettings,
} from '../../store/userEntity/userEntity.actions';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'; 
import { styles } from './Log.Style';   
import {
  IconButton,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
  Grid,
  Radio,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  // TextField,
} from '@material-ui/core/';
import moment from 'moment';
import InputRange from 'react-input-range';
import '../../theme/react-input-range.css';
import IconSettings from '@material-ui/icons/Settings';

class Log extends Component {

  state = {
    value: { min: 0, max: 10 },
  };

  render() {
    const { 
      classes,
      userEntity,
      log,
      logUpdateMood,
      logUpdateFood,
      logUpdateMeds,
      logUpdateSleep,
      logUpdateValidity,
      logSent,
      userEntityOpenSettings,
    } = this.props;

    const { 
      mood, 
      moodDescription,
      valid,
    } = log;

    const moodMinDescriptionArr = moodDescription.filter(
      moodObj => 
        moodObj.mood === mood.min
    );
    const moodMinDescription = moodMinDescriptionArr[0].description;
    const moodMaxDescriptionArr = moodDescription.filter(
      moodObj => 
        moodObj.mood === mood.max
    );
    const moodMaxDescription = moodMaxDescriptionArr[0].description;

    return (
     <React.Fragment>
       <div className={cn(classes.log, classes.maxPageWidth)}>
        <Grid container>
          <Grid item xs={12}>
            {log.sending ? 
              <CircularProgress 
                className={cn(classes.spinner)}
                color={`secondary`} 
              />  
            : null }
            {/* {!log.sent ?  */}
              <Card className={cn(classes.logCard, classes.clientInner)}>
              <CardHeader
                title={moment(Date.now()).format("dddd MMMM Do")}
                subheader={moment(Date.now()).format("h:mm a")}
                avatar={
                  <Avatar src={userEntity.avatar} />
                }
                action={
                  <IconButton
                    onClick={(e) => {
                      e.preventDefault();
                      userEntityOpenSettings();
                    }}>
                    <IconSettings />
                  </IconButton>
                }/>
              <CardContent>

              <Typography 
                  className={cn()}
                  variant={`h6`}>
                  Hi {userEntity.username},
                </Typography>

                <Typography variant={`body1`}> 
                  how would you rate you mood over the past day?
                  Please Set the left hand marker to your lowest mood 
                  and the right one set your highest, 
                  describing your mood as a range out of 10.
                </Typography>
              
                <Typography 
                  variant={`h2`}
                  className={cn(classes.score, classes.center)}>
                  {mood.min}-{mood.max}/10
                </Typography>
              
                <div className={cn(classes.slider)}>
                  <InputRange
                    formatLabel={(value) => {return null}}
                    maxValue={10}
                    minValue={0}
                    value={this.state.value}
                    onChange={(value) => {
                      logUpdateMood(value);
                      setTimeout(() => {
                        logSent();
                      }, 2000);
                      this.setState({ value });
                      if (!valid){
                        logUpdateValidity(true);
                      }
                    }} 
                  />
                </div>
              
                <Typography variant={`body1`}>
                  {moodMinDescription}
                </Typography>

                <Typography variant={`body1`}>
                  {moodMaxDescription}
                </Typography>

                
                <Typography 
                  className={cn(classes.eatWell)}
                  variant={`body2`}>
                  Did you eat well?
                </Typography>

                <FormControl 
                  component="fieldset" 
                  className={classes.formControl}>
                  
                  <RadioGroup
                      row
                      name="food"
                      className={classes.group}
                      value={null}
                      onChange={(e) => {
                        // console.log ('food', e.target.value)
                        logUpdateFood(e.target.value);
                      }}
                    >
                    <FormControlLabel value="yes" control={
                      <Radio
                        name={`food_yes`}
                        classes={{
                          checkbox: classes.root,
                          checked: classes.checked,
                        }}
                      />
                    } label="Yes" />
                    <FormControlLabel value="no" control={
                      <Radio
                        name={`food_no`}
                        classes={{
                          checkbox: classes.root,
                          checked: classes.checked,
                        }}
                      />
                    } label="No" />
                  </RadioGroup>
                </FormControl>

                <Typography 
                  className={cn(classes.sleepWell)}
                  variant={`body2`}>
                  Did you sleep well?
                </Typography>
                

                <FormControl 
                  component="fieldset" 
                  className={classes.formControl}>
                  <RadioGroup
                      row
                      name="sleep"
                      className={classes.group}
                      value={null}
                      onChange={(e) => {
                        // console.log ('sleep', e.target.value)
                        logUpdateSleep(e.target.value);
                      }}
                    >
                    <FormControlLabel value="yes" control={
                      <Radio
                        name={`sleep_yes`}
                        classes={{
                          checkbox: classes.root,
                          checked: classes.checked,
                        }}
                      />
                    } label="Yes" />
                    <FormControlLabel value="no" control={
                      <Radio
                        name={`sleep_no`}
                        classes={{
                          checkbox: classes.root,
                          checked: classes.checked,
                        }}
                      />
                    } label="No" />
                  </RadioGroup>
                </FormControl>

                <Typography 
                  className={cn(classes.sleepWell)}
                  variant={`body2`}>
                  Did you take your meds correctly?
                </Typography>


                <FormControl 
                  component="fieldset" 
                  className={classes.formControl}>
                  <RadioGroup
                      row
                      name="meds"
                      className={classes.group}
                      value={null}
                      onChange={(e) => {
                        // console.log ('meds', e.target.value);
                        logUpdateMeds(e.target.value);
                      }}
                    >
                    <FormControlLabel value="yes" control={
                      <Radio
                        name={`meds_yes`}
                        classes={{
                          checkbox: classes.root,
                          checked: classes.checked,
                        }}
                      />
                    } label="Yes" />
                    <FormControlLabel value="no" control={
                      <Radio
                        name={`meds_no`}
                        classes={{
                          checkbox: classes.root,
                          checked: classes.checked,
                        }}
                      />
                    } label="No" />
                  </RadioGroup>
                </FormControl>

                {/* <TextField
                  fullWidth
                  multiline
                  id={`notes`}
                  variant={`outlined`}
                  label={`Notes`}
                  className={cn(classes.notes)}
                  value={this.state.name}
                  onChange={(e) => {
                    console.log (e.target.value);
                  }}/> */}

              </CardContent>
            </Card>
            {/* : 
              <Paper className={cn(classes.moodSliderCard)}>      
                <Typography variant={`body1`}>
                  Thanks, your record has been saved
                </Typography>
              </Paper>
            } */}
          </Grid>
          
        </Grid>
       </div>
       <div className={cn(classes.spacer)} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
	return {
    userEntity: store.userEntity.userEntityState,
    log: store.log.logState,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    logUpdateMood: (mood) => dispatch(logUpdateMood(mood)),
    logUpdateFood: (food) => dispatch(logUpdateFood(food)),
    logUpdateMeds: (meds) => dispatch(logUpdateMeds(meds)),
    logUpdateSleep: (sleep) => dispatch(logUpdateSleep(sleep)),
    logUpdateValidity: (bool) => dispatch(logUpdateValidity(bool)),
    logSent: () => dispatch(logSent()),
    userEntityOpenSettings: () => dispatch(userEntityOpenSettings()),
	};
};

export default (
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(withRouter(withStyles(styles, { withTheme: true })(Log)))
);




/*
  <a 
    href={`https://github.com/listingslab-software/healey-mood-log`}
    title={`Open Source on Github`}
    target={`_blank`}>Open Source on Github
  </a>

*/