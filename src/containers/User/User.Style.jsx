
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    user:{
      margin: `auto`,
    },
    userCard:{
      marginTop: theme.spacing.unit,
      padding: theme.spacing.unit,
  },
});