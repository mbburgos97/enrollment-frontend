import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

interface State {
    password: string;
    showPassword: boolean;
    checked: boolean;
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
        textAlign: "center",
        marginTop: "5vh"
    },
    icon: {
        alignItems: "center",
        width: 80,
        height: 80,
    },
    textField: {
        marginTop: ".5vh"
    }
    
});

export const LoginPage: React.FC<{}> = () => {
    const classes = useStyle();
    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
        checked: false,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleRememberMe = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, checked: !values.checked });
      };


    return(
        <Grid container>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <Paper className={classes.paper} variant="outlined">
                    <AccountCircle className={classes.icon} />
                    <form autoComplete="off" className={classes.form}>
                        <OutlinedInput
                                id="username"
                                placeholder="Username"
                                margin="dense"
                                fullWidth
                                className={classes.textField}
                                required
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutlineIcon />
                                    </InputAdornment>
                                }
                            />
                            <OutlinedInput
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                fullWidth
                                className={classes.textField}
                                margin="dense"
                                placeholder="Password"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                }
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
                        <Grid container style={{marginTop: "2vh"}} direction="row" alignItems="center">
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        onChange={handleRememberMe}
                                        checked={values.checked}
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="Remember me"
                                />
                            </Grid>
                            <Grid item xs={2} />
                            <Grid item xs={4}>
                                <Typography variant="caption" style={{fontStyle: "italic"}}>
                                    <Link to="/login">Forgot Password</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{marginTop: "5vh"}}>
                            <Button type="submit" variant="contained" color="primary">
                                Login
                            </Button>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={4} />
        </Grid>
    );
}