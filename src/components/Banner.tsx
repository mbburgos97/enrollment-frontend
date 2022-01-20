import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(2),
        color: "white",
        '&:hover': {
          fontWeight: "bolder",  
          backgroundColor: "black"
        },
    },
    logo: {
        height: "7vh",
        marginRight: "2vh",
    },
    title: {
        fontWeight: "bolder",
        flexGrow: 1,
    },
  }),
);

export const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
                <Link to="/"><img className={classes.logo} src={process.env.PUBLIC_URL + "/images/logo.png"} alt='Logo.png' /></Link>
              <Typography variant="h5" className={classes.title}>
                Sample Elementary School
              </Typography>
              <Button className={classes.button} color="inherit">Login</Button>
              <Link to="/signup" style={{textDecoration: 'none'}}>
                <Button className={classes.button} color="inherit">Sign up</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      );
}