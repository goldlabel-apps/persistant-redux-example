
export default theme => ({
  app:{
    // border: '1px solid red',
    margin: 'auto',
    maxWidth: 450,
  },
  grow:{
    flexGrow: 1,
  },
  white: {
    color: 'white',
  },
  textField: {
    marginBottom: theme.spacing(),
    marginTop: theme.spacing(),
  },
  loading: {
    // border: '1px solid red',
    height: theme.spacing(0.5),
  }
});
