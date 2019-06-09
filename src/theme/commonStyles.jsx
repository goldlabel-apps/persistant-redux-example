
export default theme => ({
  app:{
    flexGrow: 1,
    maxWidth: 500,
    margin: `auto`,
  },
  bottomAppBar:{
    margin: 'auto',
    maxWidth: 500,
    border: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
  },
  topAppBar:{
    border: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
  },
  pageObj: {
    border: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
    minHeight: '85vh',
  },

  media: {
    height: 0,
    paddingTop: '19.53%', // 16:9
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card:{
    padding: theme.spacing(1),
    borderRadius: 'none',
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    left: 0,
    top: 'auto',
    bottom: 0,
    
  },
  grow: {
    flexGrow: 1,
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
