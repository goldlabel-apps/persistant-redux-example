
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    docsify: {
        maxWidth: 700,
        margin: 'auto',
        padding: theme.spacing(),
    },
    screenFirebaseUI:{
        // border: '1px solid red',
        margin: theme.spacing(),
    },
    authUI:{
        margin: 'auto',
        maxWidth: 360,
        border: 'none',
        borderRadius: 'none',
        boxShadow: 'none',
        paddingTop: theme.spacing(3),
        textAlign: 'center',
    }
});