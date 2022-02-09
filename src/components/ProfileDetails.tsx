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
    profile: IProfile;
    type: string;
    patchProfile: (id: string, type: string, profile: IPatchProfile) => void;
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


export const ProfileDetails: React.FC<Props> = ({ profile, type, patchProfile }) => {
    const classes = useStyles();
    let label;
    if (type === "student") label = "Student ID: ";
    else if (type === "teacher") label = "Teacher ID: ";

    return (
        <Grid container className={classes.container} item xs={8} spacing={2}>
            
            <List style={{ width: "100%"}}>
                <ListItem>
                    <Typography variant="h5" >Account Details:</Typography>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>{label}</ListItemText>
                    <ListItemText className={classes.value}>{profile.id}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => patchProfile(profile.id, type, {email: "change2@gmail.com"})}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>First Name: </ListItemText>
                    <ListItemText className={classes.value}>{profile.first_name}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Middle Name: </ListItemText>
                    <ListItemText className={classes.value}>{profile.middle_name}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Last Name: </ListItemText>
                    <ListItemText className={classes.value}>{profile.last_name}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Email: </ListItemText>
                    <ListItemText className={classes.value}>{profile.email}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Contact Number: </ListItemText>
                    <ListItemText className={classes.value}>{profile.contact_number}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Nickname: </ListItemText>
                    <ListItemText className={classes.value}>{profile.nickname}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Username: </ListItemText>
                    <ListItemText className={classes.value}>{profile.username}</ListItemText>
                    <ListItemSecondaryAction />
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Password: </ListItemText>
                    <ListItemText className={classes.value}>***************</ListItemText>
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