
export default theme => ({
  cardInner:{
    marginLeft: theme.spacing.unit, 
    marginRight: theme.spacing.unit,
  },
  maxPageWidth:{
    maxWidth: 400,
  },
  white:{
    color: `white`,
  },
  clearBoth:{
    clear: 'both',
  },
  pullLeft:{
    textAlign: 'left',
  },
  redBordered:{
    border: '1px solid red',
  },
  grow: {
    flexGrow: 1,
  },
  center:{
    textAlign: 'center'
  },
  alignRight:{
    textAlign: 'right'
  },
  alignLeft:{
    textAlign: 'left'
  },
  primaryLight:{
    color: theme.palette.primary[100],
  },
  primary:{
    color: theme.palette.primary[900],
  },
  primaryBG:{
    background: theme.palette.primary[900],
  },
  secondary:{
    color: theme.palette.secondary[900],
  },
  secondaryLight:{
    color: theme.palette.secondary[100],
  },
  friendly:{
    color: theme.palette.primary[900],
  },
  warning:{
    color: theme.palette.secondary[900],
  },
  error:{
    color: theme.palette.secondary[900],
  },
  wrap:{
    wordWrap: 'break-word',
  },
  hiddenText:{
    fontSize: 1,
    color: 'white',
  },
  menuItem: {
    // '&:hover': {
    //   backgroundColor: theme.palette.secondary.main,
    //   '& $primary, & $icon': {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
  icon: {}
});
