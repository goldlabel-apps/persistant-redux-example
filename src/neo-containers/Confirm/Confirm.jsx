
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    topReset,
    topConfirm,
  } from '../../store/actionCreators';
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

    render (){
        const { 
            confirm,
            topConfirm
        } = this.props;
        if (!confirm){
            return null;
        }
        return (
            <Dialog
                aria-label={`Confirm`}
                open={true}
                fullScreen={this.props.fullScreen}
                onClose={(e) => {
                    e.preventDefault();
                    topConfirm(false);
                }}
                maxWidth={`md`}
            >
                <DialogTitle id="new-issue">
                    {confirm.title}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        {confirm.description}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    
                    <Button 
                        aria-label={`cancel`}
                        onClick={(e) => {
                            e.preventDefault();
                            topConfirm(false);
                        }} 
                        color={`secondary`}>
                        {confirm.cancelText}
                    </Button>

                    <Button 
                        autoFocus
                        color={`secondary`}
                        aria-label={`confirm`}
                        variant={`contained`}
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.confirm.confirmFunc();
                        }}>
                        {confirm.confirmText}
                    </Button>

                </DialogActions>
        </Dialog>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      topReset,
      topConfirm,
    }, dispatch);
  };

const mapStateToProps = (store) => {
	return {
        confirm: store.top.confirm,
	};
};

export default (
	withMobileDialog()(connect(
        mapStateToProps,
        mapDispatchToProps
	)(withStyles(styles, { withTheme: true })(Confirm)))
);
