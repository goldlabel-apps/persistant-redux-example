
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    loginForm:{
        // border: '1px solid red',
        padding: theme.spacing(),
    },
    rememberText:{
        paddingTop: theme.spacing(1.25),
    },
    rememberHelp:{
        paddingLeft: theme.spacing(1.25),
        paddingTop: theme.spacing(1.25),
    }
});