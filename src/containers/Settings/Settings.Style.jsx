
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
    signOut:{
      margin: theme.spacing.unit * 5,
    }
});