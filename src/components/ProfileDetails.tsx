import React from "react";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

interface Props {
    student: IProfile;
}

const useStyles = makeStyles({
    container: {
        marginLeft: "8vh",
        backgroundColor: "cornsilk",
    },
    label: {
        textAlign: "left",
        width: "30%"
        
    }, 
    value: {
        textAlign: "left",
        width: "70%"
    }
});


export const ProfileDetails: React.FC<Props> = ({student}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container} item xs={8} spacing={2}>
            
            <List style={{ width: "100%"}}>
                <ListItem>
                    <Typography variant="h5" >Account Details:</Typography>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Student ID: </ListItemText>
                    <ListItemText className={classes.value}>{student.id}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>First Name: </ListItemText>
                    <ListItemText className={classes.value}>{student.first_name}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Middle Name: </ListItemText>
                    <ListItemText className={classes.value}>{student.middle_name}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Last Name: </ListItemText>
                    <ListItemText className={classes.value}>{student.last_name}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
            
        </Grid>
    );
}