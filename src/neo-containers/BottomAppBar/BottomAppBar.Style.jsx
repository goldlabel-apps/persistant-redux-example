
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
  ...commonStyles(theme),
  text: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'none',
    boxShadow: 'none',
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',    
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});