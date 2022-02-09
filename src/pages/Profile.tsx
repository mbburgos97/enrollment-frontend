import React, { useEffect, useCallback } from "react";
import { ImageProfile } from "../components/ImageProfile";
import { ProfileDetails } from "../components/ProfileDetails";
import { useParams, useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { profileSelector, setProfileThunk, patchProfileThunk } from "../slices/profileSlice" 
import { type } from "os";

interface Props {
  type: string;
}

const useStyles = makeStyles({
  container: {
    padding: "5vh",
  },
});

export const Profile: React.FC<Props> = ({type}) => {
    const classes = useStyles();

    const profile = useSelector(profileSelector);

    const dispatch = useDispatch();
    const params = useParams();
    const location = useLocation();
    
    const setProfile = useCallback(setProfileThunk(dispatch), [dispatch]) ;
    
    const patchProfile = useCallback(patchProfileThunk(dispatch), [dispatch]);

    useEffect(() => {
        if (params.id) {
          setProfile(params.id, location.pathname.split('/')[1])
        }
    }, [params.id]);

    return (    
        <Grid container className={classes.container}>
            <ImageProfile profile_image={profile.profile_image} 
            full_name={profile.last_name + ", " + profile.first_name + " " + profile.middle_name[0]}/>
            <ProfileDetails profile={profile} type={type} patchProfile={patchProfile} />
        </Grid>
    );
}
