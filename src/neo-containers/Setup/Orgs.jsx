import React from 'react';
import cn from 'classnames';
import {
    IconButton,
    Card,
    CardContent,
    CardHeader,
    Tooltip,
    Typography,
} from '@material-ui/core/';
import IconHide from '@material-ui/icons/HighlightOff';
export const Orgs = (props) => {
    console.log ('Orgs', props.orgs);
    const { orgs, classes } = props;
    return (
        <React.Fragment>
            <Card className={cn(classes.cardx)}>
                <CardHeader
                    title={`Orgs`}
                    // subheader={`Number?`}
                    action={
                        <Tooltip title={`Hide Orgs`}>
                            <IconButton 
                                edge={`start`}
                                color={`inherit`}
                                aria-label={`Hide Orgs`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log (e);
                                }}
                            >
                                <IconHide />
                            </IconButton>
                        </Tooltip>
                    }
                />

                <CardContent>
                    { !orgs.length ? 
                        <Typography variant={`body1`}>
                            no orgs.
                        </Typography> 
                    : orgs.map ((item, index) => {
                        return (
                            <div key={`org_${index}`}>
                                <Typography variant={`body1`}>
                                    {item.name}
                                </Typography>
                            </div>
                        );
                    }) }
                </CardContent>
            </Card>
        </React.Fragment>
    );
}