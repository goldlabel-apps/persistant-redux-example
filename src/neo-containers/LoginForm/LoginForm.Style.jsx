
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    loginForm:{
        padding: theme.spacing(),
    },
    rememberText:{
        paddingLeft: theme.spacing(1.25),
        paddingTop: theme.spacing(1.65),
    },
    loginHeader:{
        marginBottom: theme.spacing(3),
        textAlign: 'center',
    }
});