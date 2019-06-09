import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './NewIssue.Style';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    withMobileDialog,
} from '@material-ui/core/';

class NewIssue extends Component {
    render (){
        const { 
            classes,
            newIssue,
            fullScreen,
        } = this.props;
        let isOpen = false;
        if (newIssue !== null){
            isOpen = true;
        } else{
            return null;
        }
        console.log ('NewIssue', newIssue);
        return (
            <Dialog
                className={cn(classes.newIssue)}
                fullScreen={fullScreen}
                open={isOpen}
                onClose={()=>{}}
                aria-labelledby="new-issue"
            >
                <DialogTitle id="new-issue">
                    {`New Issue`}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    
                    <Button 
                        onClick={()=>{}} 
                        color={`secondary`}>
                        No
                    </Button>

                    <Button 
                        autoFocus
                        variant={`contained`}
                        onClick={((e)=>{console.log (e)})} 
                        color={`primary`}>
                        Yes
                    </Button>

                </DialogActions>
        </Dialog>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        newIssue: store.top.newIssue
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        // logUpdateValidity: (bool) => dispatch(logUpdateValidity(bool)),
	};
};

export default (
	withMobileDialog()(connect(
		mapStateToProps,
		mapDispatchToProps
	)(withStyles(styles, { withTheme: true })(NewIssue)))
);
