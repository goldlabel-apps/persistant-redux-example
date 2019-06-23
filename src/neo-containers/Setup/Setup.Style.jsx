
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    setup:{
        // border: '1px solid green',
        padding: 10,
    },

    orgCard:{
        // background: '#def2f6',
        padding: theme.spacing(1),
        borderRadius: 'none',
        border: 'none',
        boxShadow: 'none',
    },


});