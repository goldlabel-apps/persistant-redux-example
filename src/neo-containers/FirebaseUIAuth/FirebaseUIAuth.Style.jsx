
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    authUI:{
        margin: 'auto',
        maxWidth: 500,
        border: 'none',
        borderRadius: 'none',
        boxShadow: 'none',
        textAlign: 'center',
    },
    login: {
        marginTop: theme.spacing(3),
    },
    title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
    },
    subTitle: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
    },
    userCard:{
        textAlign: 'left',
    },
    screenFirebaseUI:{
        // border: '1px solid red',
        margin: theme.spacing(),
    },

});