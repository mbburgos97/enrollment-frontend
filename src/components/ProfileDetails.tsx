import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { OutlinedInput } from "@material-ui/core";

interface Props {
    profile: IProfile;
    type: string;
    patchProfile: (id: string, type: string, profile: IPatchProfile) => void;
}

interface ProfileFieldProps {
    children?: React.ReactNode;
    value: boolean;
    className: string;
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

function ProfileField(props: ProfileFieldProps) {
    const { className, children, value, ...other } = props;

    return (
        <ListItemText
            hidden={value}
            className={className}
        >
            <Typography component="span">{children}</Typography>
        </ListItemText>
    );
  }

export const ProfileDetails: React.FC<Props> = ({ profile, type, patchProfile }) => {
    const classes = useStyles();
    let label;
    if (type === "student") label = "Student ID: ";
    else if (type === "teacher") label = "Teacher ID: ";

    const [currentProfile, setCurrentProfile] = useState({...profile});

    useEffect(() => {
        setCurrentProfile(profile);
    }, [profile]);

    const [value, setValue] = useState({
        first_name: false,
        middle_name: false,
        last_name: false,
        contact_number: false,
        nickname: false,
        email: false,
    });

    const handleProfilePatch = (field: string, value: string) => (event: React.SyntheticEvent) => {
        patchProfile(profile.id, type, {[field]: value})
        setValue(prevValue => ({...prevValue, [field]: !prevValue.first_name}));
    } 

    const handleChangeProfileField = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentProfile({ ...currentProfile, [prop]: event.target.value });
    };

    const handleEdit = (newValue: boolean, key: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {  
        setValue({...value, [key]: newValue});
    };
    console.log(profile)
    console.log(currentProfile)
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
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>First Name: </ListItemText>
                    <ProfileField className={classes.value} value={value.first_name}>{profile.first_name}</ProfileField>
                    <ProfileField className={classes.value} value={!value.first_name}>
                        <form onSubmit={handleProfilePatch("first_name", currentProfile.first_name)}>
                            <OutlinedInput margin="dense" 
                                value={currentProfile.first_name} 
                                onChange={handleChangeProfileField("first_name")}    
                                required
                            />
                            <IconButton type="submit">
                                <DoneIcon color="primary" />
                            </IconButton>
                        </form>
                    </ProfileField>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete"
                            hidden={value.first_name}
                            onClick={handleEdit(!value.first_name, "first_name")}
                        >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Middle Name: </ListItemText>
                    <ProfileField className={classes.value} value={value.middle_name}>{profile.middle_name}</ProfileField>
                    <ProfileField className={classes.value} value={!value.middle_name}>
                        <form onSubmit={handleProfilePatch("middle_name", currentProfile.middle_name)}>
                            <OutlinedInput margin="dense" 
                                value={currentProfile.middle_name} 
                                onChange={handleChangeProfileField("middle_name")}    
                                required
                            />
                            <IconButton type="submit">
                                <DoneIcon color="primary" />
                            </IconButton>
                        </form>
                    </ProfileField>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete"
                            hidden={value.middle_name}
                            onClick={handleEdit(!value.middle_name, "middle_name")}
                        >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Last Name: </ListItemText>
                    <ProfileField className={classes.value} value={value.last_name}>{profile.last_name}</ProfileField>
                    <ProfileField className={classes.value} value={!value.last_name}>
                        <form onSubmit={handleProfilePatch("last_name", currentProfile.last_name)}>
                            <OutlinedInput margin="dense" 
                                value={currentProfile.last_name} 
                                onChange={handleChangeProfileField("last_name")}    
                                required
                            />
                            <IconButton type="submit">
                                <DoneIcon color="primary" />
                            </IconButton>
                        </form>
                    </ProfileField>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete"
                            hidden={value.last_name}
                            onClick={handleEdit(!value.last_name, "last_name")}
                        >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Email: </ListItemText>
                    <ProfileField className={classes.value} value={value.email}>{profile.email}</ProfileField>
                    <ProfileField className={classes.value} value={!value.email}>
                        <form onSubmit={handleProfilePatch("email", currentProfile.email)}>
                            <OutlinedInput margin="dense" 
                                value={currentProfile.email} 
                                onChange={handleChangeProfileField("email")}    
                                required
                            />
                            <IconButton type="submit">
                                <DoneIcon color="primary" />
                            </IconButton>
                        </form>
                    </ProfileField>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete"
                            hidden={value.email}
                            onClick={handleEdit(!value.email, "email")}
                        >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Contact Number: </ListItemText>
                    <ProfileField className={classes.value} value={value.contact_number}>{profile.contact_number}</ProfileField>
                    <ProfileField className={classes.value} value={!value.contact_number}>
                        <form onSubmit={handleProfilePatch("contact_number", currentProfile.contact_number)}>
                            <OutlinedInput margin="dense" 
                                value={currentProfile.contact_number} 
                                onChange={handleChangeProfileField("contact_number")}    
                                required
                            />
                            <IconButton type="submit">
                                <DoneIcon color="primary" />
                            </IconButton>
                        </form>
                    </ProfileField>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete"
                            hidden={value.contact_number}
                            onClick={handleEdit(!value.contact_number, "contact_number")}
                        >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText className={classes.label}>Nickname: </ListItemText>
                    <ProfileField className={classes.value} value={value.nickname}>{profile.nickname}</ProfileField>
                    <ProfileField className={classes.value} value={!value.nickname}>
                        <form onSubmit={handleProfilePatch("nickname", currentProfile.nickname)}>
                            <OutlinedInput margin="dense" 
                                value={currentProfile.nickname} 
                                onChange={handleChangeProfileField("nickname")}    
                                required
                            />
                            <IconButton type="submit">
                                <DoneIcon color="primary" />
                            </IconButton>
                        </form>
                    </ProfileField>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete"
                            hidden={value.nickname}
                            onClick={handleEdit(!value.nickname, "nickname")}
                        >
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