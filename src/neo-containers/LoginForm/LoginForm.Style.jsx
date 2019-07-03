
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    loginForm:{
        // border: '1px solid red',
        padding: theme.spacing(),
        marginTop: theme.spacing(3),
    },
    rememberText:{
        paddingLeft: theme.spacing(1.25),
        paddingTop: theme.spacing(1.65),
    },
    rememberHelp:{
    },
    loginBtn:{
        marginTop: theme.spacing(1),
    },
    loginHeader:{
        marginBottom: theme.spacing(3),
        textAlign: 'center',
    }
});