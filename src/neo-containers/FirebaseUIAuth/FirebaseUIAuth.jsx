
import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiTheme from '../../theme/mui';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FirebaseUIAuth.Style';
// import cn from 'classnames';
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
import LoginStatus from './LoginStatus';

class FirebaseUIAuth extends Component {

    // componentDidMount () {
        // this.runDocsify(null);
    // }

    render (){
        // const { 
        //     classes,
        //     content
        // } = this.props;
        const theme = createMuiTheme( muiTheme );
        // console.log ('theme', theme);
        return (
            <MuiThemeProvider theme={theme}>
`               <LoginStatus />
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        content: store.system.content
        // docsifyObj: store.docsify.docsifyObj,
	};
};

export default (
	connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(FirebaseUIAuth))
);