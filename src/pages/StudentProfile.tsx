import React, { useState, useEffect, useCallback } from "react";
import { ImageProfile } from "../components/ImageProfile";
import { ProfileDetails } from "../components/ProfileDetails";
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { profileSelector, setProfileThunk } from "../slices/profileSlice" 

const useStyles = makeStyles({
  container: {
    padding: "5vh",
  },
});

export const StudentProfile: React.FC<{}> = () => {
    const classes = useStyles();

    const profile = useSelector(profileSelector);

    const dispatch = useDispatch();
    const params = useParams();

    const setProfile = useCallback(setProfileThunk(dispatch), [dispatch]) ;

    useEffect(() => {
        if (params.id) {
          setProfile(params.id)
        }
    }, [params.id]);

    return (    
        <Grid container className={classes.container}>
            <ImageProfile profile_image={profile.profile_image} 
            full_name={profile.last_name + ", " + profile.first_name + " " + profile.middle_name[0]}/>
            <ProfileDetails student={profile} />
        </Grid>
    );
}
