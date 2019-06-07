
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    log:{
      margin: `auto`,
    },
    notes:{
      marginTop: theme.spacing.unit,
    },
    clientInner:{
      marginLeft: theme.spacing.unit, 
      marginRight: theme.spacing.unit,
    },
    logCard:{
      marginTop: theme.spacing.unit,
      padding: theme.spacing.unit,
    },
    spacer:{
      height:90,
    },
    checkbox: {
      color: theme.palette.primary.main,
      '&$checked': {
        color: theme.palette.secondary.main,
      },
    },
    eatWell:{
      marginTop: theme.spacing.unit * 4,
    },
    checked: {
    },

    spinner:{
      marginTop: theme.spacing.unit * 10,
    },
    slider: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 4, 
    },
    score:{
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4,
      color: theme.palette.secondary.main,
    },
    sliderIcon:{
      border: `2px solid ` + theme.palette.primary.main,
      width: 50,
      height: 50,
      margin: -25
    },
    title: {
      marginTop: theme.spacing.unit * 5,
    },
    version: {
      marginTop: theme.spacing.unit * 3,
    }
});