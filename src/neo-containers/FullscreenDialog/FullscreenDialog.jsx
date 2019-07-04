
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import dispatchAction from '../../store/dispatchAction';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './FullscreenDialog.Style';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    withMobileDialog,
} from '@material-ui/core/';

class FullscreenDialog extends Component {

    state = {
        isOpen: true,
        fullScreen: true,
    }

    render (){
        const { 
            classes
        } = this.props;
        // const { restrictAccess } = this.props.store.docsify;

        let open = false;
        
        // console.log ('restrictAccess', restrictAccess);
        return (
            <Dialog
                aria-label="Dialog"
                className={cn(classes.newIssue)}
                fullScreen={this.state.fullScreen}
                open={open}
                onClose={() => {
                    this.setState({isOpen: false});
                    // dispatchAction({type: `SYSTEM/CLOSE/NEWISSUE`})}
                }}
                maxWidth={`md`}
            >
                <DialogTitle id="new-issue">
                    {`Confirm`}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        You cannot currently log into this App. 
                        For technical reasons.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    
                    <Button 
                        onClick={(e) => {
                            e.preventDefault();
                            this.setState({isOpen: false});
                        }} 
                        color={`secondary`}>
                        No
                    </Button>

                    <Button 
                        aria-label={`understood`}
                        // autoFocus
                        variant={`contained`}
                        onClick={(e) => {
                            e.preventDefault();
                            this.setState({isOpen: false});
                        }} 
                        color={`primary`}>
                        Understood
                    </Button>

                </DialogActions>
        </Dialog>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        store,
        // confirm: store.system.confirm
	};
};

export default (
	withMobileDialog()(connect(
		mapStateToProps,null
	)(withStyles(styles, { withTheme: true })(FullscreenDialog)))
);
