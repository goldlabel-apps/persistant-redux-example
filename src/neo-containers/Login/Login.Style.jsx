
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    login:{
        // border: '1px solid red',
    },
    loginBtn:{
        marginTop: theme.spacing(1.2),
        padding: theme.spacing(1.7),
    }
});