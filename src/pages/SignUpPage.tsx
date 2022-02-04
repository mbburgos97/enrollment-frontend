import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ProfileService } from '../services/ProfileService';
import Switch from '@material-ui/core/Switch';

interface State {
    password: string;
    isTeacher: boolean;
    showPassword: boolean;
    confirmPassword: string;
    idPlaceholder: string;
    showConfirmPassword: boolean;
    profile: IProfile;
}

const useStyle = makeStyles({
    paper: {
        marginTop: "5vh",
        padding: "3vh",
        textAlign: "center",
    }, 
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: "4vh",
        textAlign: "center"
    },
    textField: {
        marginTop: ".5vh"
    },
});

export const SignUpPage: React.FC<{}> = () => {
    const classes = useStyle();

    const [values, setValues] = React.useState<State>({
        password: '',
        isTeacher: false,
        showPassword: false,
        confirmPassword: '',
        showConfirmPassword: false,
        idPlaceholder: 'Student ID',
        profile: {
            id: '',
            first_name: '',
            middle_name: '',
            last_name: '',
            profile_image: '',
            password: '',
            email: '',
            username: '',
            contact_number: '',
            nickname: ''
        }
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChangeProfileField = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let profile = {... values.profile, [prop]: event.target.value };
        setValues({ ...values, profile: profile });
    };

    const handleChangeProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
        let idPlaceholder = 'Student ID';
        if (event.target.checked) idPlaceholder = 'Teacher ID';
        setValues({ ...values, isTeacher: event.target.checked, idPlaceholder: idPlaceholder });
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        let profile = {... values.profile, password: values.password };
        setValues({ ...values, profile: profile });
        console.log(values.isTeacher)
        if (values.isTeacher) {
            ProfileService.createTeacher(values.profile);
        } else {
            ProfileService.createStudent(values.profile);
        }
    } 

    return (
        <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Paper className={classes.paper} variant="outlined" >
                <Typography component="div">
                <h2 style={{marginBottom: 0}}>Create Account</h2>
                    <Grid component="label" container alignItems='center' spacing={1}>
                        <Grid item xs={9}></Grid>
                    <Grid item xs={1}>Student</Grid>
                    <Grid item>
                        <Switch
                            color="default"
                            checked={values.isTeacher}
                            onChange={handleChangeProfile}
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                    </Grid>
                    <Grid item>Teacher</Grid>
                    </Grid>
                </Typography>
                    
                    <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                        <OutlinedInput
                            placeholder={values.idPlaceholder}
                            margin="dense"
                            fullWidth
                            className={classes.textField}
                            value={values.profile.id}
                            onChange={handleChangeProfileField('id')}
                            required
                        />
                        <div style={{width:"40%"}}>
                            <OutlinedInput
                                placeholder="First Name"
                                fullWidth
                                margin="dense"
                                required
                                className={classes.textField}
                                value={values.profile.first_name}
                                onChange={handleChangeProfileField('first_name')}
                            />
                        </div>
                        <div style={{width:"19%", padding: "0 .5%"}}>
                            <OutlinedInput
                                fullWidth
                                placeholder="Middle Name"
                                margin="dense"
                                required
                                className={classes.textField}
                                value={values.profile.middle_name}
                                onChange={handleChangeProfileField('middle_name')}
                            />
                        </div>
                        <div style={{width:"40%"}}>
                            <OutlinedInput 
                                placeholder="Last Name" 
                                fullWidth
                                margin="dense"
                                required
                                className={classes.textField}
                                value={values.profile.last_name}
                                onChange={handleChangeProfileField('last_name')}
                            />
                        </div>
                        <OutlinedInput
                            placeholder="Email"
                            margin="dense"
                            fullWidth
                            className={classes.textField}
                            value={values.profile.email}
                            onChange={handleChangeProfileField('email')}
                            required
                        />
                        <OutlinedInput
                            placeholder="Contact Number"
                            margin="dense"
                            fullWidth
                            className={classes.textField}
                            value={values.profile.contact_number}
                            onChange={handleChangeProfileField('contact_number')}
                            required
                        />
                        <OutlinedInput
                            placeholder="Username"
                            margin="dense"
                            fullWidth
                            className={classes.textField}
                            value={values.profile.username}
                            onChange={handleChangeProfileField('username')}
                            required
                        />
                        <OutlinedInput
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            fullWidth
                            className={classes.textField}
                            margin="dense"
                            placeholder="Password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <OutlinedInput
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            fullWidth
                            className={classes.textField}
                            margin="dense"
                            placeholder="Confirm Password"
                            error={values.password!==values.confirmPassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        
                        <Grid container justifyContent="center" style={{marginTop: "2vh"}}>
                            <Button type="submit" variant="contained" color="primary" disabled={values.password!==values.confirmPassword}>
                                Create Account
                            </Button>
                        </Grid>
                        
                        <div style={{width: "100%", textAlign: "center", paddingTop: "2vh"}}>
                            <Typography align="center" variant="caption" display="block" gutterBottom>
                                Already have an account? <Link to="/login" style={{fontStyle: "italic"}}>Login</Link>
                            </Typography>
                        </div>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
}