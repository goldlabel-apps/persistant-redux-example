
import React, { Component } from 'react';
import { connect } from 'react-redux';
import dispatchAction from '../../store/dispatchAction';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './Confirm.Style';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    withMobileDialog,
} from '@material-ui/core/';

class Confirm extends Component {
    render (){
        const { 
            classes,
            confirm,
            fullScreen,
        } = this.props;
        if (!confirm.open){
            return null;
        }
        // console.log ('NewIssue', newIssue);
        return (
            <Dialog
                className={cn(classes.newIssue)}
                fullScreen={fullScreen}
                open={true}
                onClose={() => dispatchAction({type: `SYSTEM/CLOSE/NEWISSUE`})}
                aria-labelledby="new-issue"
                maxWidth={`md`}
            >
                <DialogTitle id="new-issue">
                    {`Confirm`}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to do this?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    
                    <Button 
                        onClick={(e) => {
                            e.preventDefault();
                            dispatchAction({type: `SYSTEM/CLOSE/CONFIRM`});
                        }} 
                        color={`secondary`}>
                        No
                    </Button>

                    <Button 
                        autoFocus
                        variant={`contained`}
                        onClick={(e) => {
                            e.preventDefault();
                            dispatchAction({type: `SYSTEM/CLOSE/CONFIRM`});
                        }} 
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
        confirm: store.system.confirm
	};
};

export default (
	withMobileDialog()(connect(
		mapStateToProps,null
	)(withStyles(styles, { withTheme: true })(Confirm)))
);
