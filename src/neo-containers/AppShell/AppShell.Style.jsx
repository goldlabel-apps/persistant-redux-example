
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    iconGridItem:{
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    logo: {
        height: 100,
        width: 100
    }
});