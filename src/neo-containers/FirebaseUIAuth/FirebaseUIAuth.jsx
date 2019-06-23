
import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiTheme from '../../theme/mui';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FirebaseUIAuth.Style';
import cn from 'classnames';
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
import ScreenFirebaseUI from './ScreenFirebaseUI';

class FirebaseUIAuth extends Component {

    componentDidMount () {
        // this.runDocsify(null);
    }

    runDocsify = (e) => {
        const script = document.createElement(`script`);
        script.src = `//unpkg.com/docsify/lib/docsify.min.js`;
        script.async = true;
        document.body.appendChild(script);
    }

    render (){
        const theme = createMuiTheme( muiTheme );
        const { 
            classes,
            docsifyObj
        } = this.props;
        const {
            authed,
            user,
        } = docsifyObj;
        return (
            <MuiThemeProvider theme={theme}>
                <div className={cn(classes.docsify)}>
                    {authed && user !== null ? 
                        <div>U R Authed.</div> 
                    : 
                        <ScreenFirebaseUI runDocsify={this.runDocsify}/> 
                    }                    
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        docsifyObj: store.docsify.docsifyObj,
	};
};

export default (
	connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(FirebaseUIAuth))
);