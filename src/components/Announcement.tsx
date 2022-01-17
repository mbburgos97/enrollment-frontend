import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    announcement: {
        padding: "10px",
        fontWeight: "bolder",
        margin: 0,
    },
    content: {
        textIndent: "5vh"
    },
    paper: {
        marginTop: "2vh"
    }
});

export const Announcement: React.FC<{}> = () => {
    const classes = useStyles();

    return(
        <div>
            <Typography variant="h5">
                Announcements <EmojiFlagsIcon />
            </Typography>
            <Paper variant="outlined" className={classes.paper}>
                <dl className={classes.announcement}>
                    <dt>
                        <Typography variant="subtitle1" className={classes.announcement}>
                            English AM-2
                        </Typography>
                    </dt>
                    <dd> 
                        <Typography  variant="body1">
                            * No Classes tomorrow!
                        </Typography>        
                    </dd>
                </dl>
            </Paper>
            <Paper variant="outlined" className={classes.paper}>
                <dl className={classes.announcement}>
                    <dt>
                        <Typography variant="subtitle1" className={classes.announcement}>
                            Mathematics PM-1
                        </Typography>
                    </dt>
                    <dd> 
                        <Typography  variant="body1">
                            * Periodical Examination on Wednesday.
                        </Typography>        
                    </dd>
                </dl>
            </Paper>
        </div>
    );
}