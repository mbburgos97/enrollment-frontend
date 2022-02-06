import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface Props {
    profile_image: string;
    full_name: string;
}

const useStyles = makeStyles({
    container: {
        textAlign: "center"
    },
    avatar: {
        maxHeight: "70%",
        maxWidth: "70%",
        borderRadius: "50%",
        margin: "2vh 0",
    },
    name: {
        marginTop: 0,
    }
})


export const ImageProfile: React.FC<Props> = ({profile_image, full_name}) => {
    const classes = useStyles();

    return (
        <Grid item xs={3} className={classes.container}>
            <h2 className={classes.name}>{full_name}.</h2>
            <div><img className={classes.avatar} src={profile_image} alt="profile_photo.png" /></div>
            <Button variant="contained" color="primary">Upload Photo</Button>
        </Grid>
    );
}