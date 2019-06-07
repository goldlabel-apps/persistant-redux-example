
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    auth:{
        margin: `auto`,
    },
    authing:{
        marginTop: theme.spacing.unit * 20,
    },
    authProgress:{
        marginBottom: theme.spacing.unit * 6,
        marginRight: theme.spacing.unit * 3,
    },
    authInner:{
        marginLeft: theme.spacing.unit, 
        marginRight: theme.spacing.unit,
    },
    authCard:{
        marginTop: theme.spacing.unit,
        padding: theme.spacing.unit,
    },
    emailField:{
        marginBottom: theme.spacing.unit * 4, 
    },
    passwordField:{
        marginBottom: theme.spacing.unit * 4, 
    },
    authLogo:{
        width: 150,
        heigh: 150,
    },
});