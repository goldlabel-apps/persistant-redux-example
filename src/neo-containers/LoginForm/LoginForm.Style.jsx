
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    login:{
        // border: '1px solid red',
    },
    loginBtn:{
        marginTop: theme.spacing(1.2),
        padding: theme.spacing(1.7),
    },
    githubLogoGrid: {
        textAlign: 'center',
    },
    siteName: {
        textAlign: 'center'
    },
    githubLogo: {
        margin: 'auto',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(),
        width: 75,
        height: 75,
    }
});