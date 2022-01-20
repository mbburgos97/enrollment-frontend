import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme: Theme) => 
    createStyles({
        paper: {
            margin: "5vh",
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
            marginBottom: "1vh"
        },
    }));

export const SignUpPage: React.FC<{}> = () => {
    const classes = useStyle();
    return (
        <Paper component="form" className={classes.paper} variant="outlined" >
            <h2>Create Account</h2>
            <form autoComplete="off" className={classes.form} noValidate>
                <div style={{width:"40%"}}>
                    <TextField
                        id="first-name"
                        placeholder="First Name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required
                    />
                </div>
                <div style={{width:"18%", padding: "0 1%"}}>
                    <TextField
                        id="middle-name"
                        fullWidth
                        placeholder="Middle Name"
                        margin="normal"
                        variant="outlined"
                        required
                    />
                </div>
                    
                <div style={{width:"40%"}}>
                    <TextField
                        id="last-name"        
                        placeholder="Last Name" 
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required
                    />
                </div>
                
                <TextField
                    id="email"
                    placeholder="Email"
                    fullWidth
                    variant="outlined"
                    className={classes.textField}
                    required
                />
                <TextField
                    id="username"
                    placeholder="Username"
                    fullWidth
                    variant="outlined"
                    className={classes.textField}
                    required
                />
                <TextField
                    id="password"
                    placeholder="Password"
                    fullWidth
                    variant="outlined"
                    className={classes.textField}
                    required
                />
                <TextField
                    id="confirm-password"
                    placeholder="Confirm Password"
                    fullWidth
                    variant="outlined"
                    className={classes.textField}
                    required
                />
                <Grid container justify="center" style={{marginTop: "2vh"}}>
                    <Button type="submit" variant="contained" color="primary">
                        Create Account
                    </Button>
                </Grid>
                
                <div style={{width: "100%", textAlign: "center", paddingTop: "2vh"}}>
                    <Typography align="center" variant="caption" display="block" gutterBottom>
                        Already have an account? <Link to="/login">Click here</Link>
                    </Typography>
                </div>
            </form>
            
        </Paper>
    );
}