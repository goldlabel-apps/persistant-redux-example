
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import dispatchAction from '../../store/dispatchAction';
import { withStyles } from '@material-ui/core/styles';
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

    static defaultProps = {
        title: `Please confirm...`,
        description: `You wish to perform this action which usually cannot be undone`,
        confirmText: `Yes Please`,
        cancelText: `No Thanks`,
        confirmFunc: (e) => {
            console.log ('[CONFIRMED]');
        },
    }

    render (){
        const { 
            confirm,
        } = this.props;
        console.log ('confirm', confirm);
        if (!confirm){
            return null;
        }
        return (
            <Dialog
                aria-label={`Confirm`}
                open={true}
                fullScreen={this.props.fullScreen}
                onClose={(e) => {
                    // this.setState({isOpen: false});
                    e.preventDefault();
                    console.log ('[CLOSE]')
                }}
                maxWidth={`md`}
            >
                <DialogTitle id="new-issue">
                    {this.props.title}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        {this.props.description}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    
                    <Button 
                        aria-label={`cancel`}
                        onClick={(e) => {
                            e.preventDefault();
                            console.log ('[CLOSE]');
                        }} 
                        color={`secondary`}>
                        {this.props.cancelText}
                    </Button>

                    <Button 
                        aria-label={`confirm`}
                        // autoFocus
                        variant={`contained`}
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.confirmFunc(e);
                            console.log ('[CLOSE]');
                        }} 
                        color={`primary`}>
                        {this.props.confirmText}
                    </Button>

                </DialogActions>
        </Dialog>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        confirm: store.top.confirm,
        // confirm: store.system.confirm
	};
};

export default (
	withMobileDialog()(connect(
		mapStateToProps,null
	)(withStyles(styles, { withTheme: true })(Confirm)))
);
