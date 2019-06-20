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
    // console.log ('Orgs', props.orgs);
    const { orgs, classes } = props;
    return (
        <React.Fragment>
            <Card className={cn(classes.orgCard)}>
                <CardHeader
                    title={`Your orgs`}
                    // subheader={`Number?`}
                    action={
                        <Tooltip title={`Hide your orgs`}>
                            <IconButton 
                                edge={`start`}
                                color={`inherit`}
                                aria-label={`Hide your orgs`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log ('Hide your orgs');
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