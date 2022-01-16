import React from "react";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        textAlign: "center"
    }, 
    button: {
        color: "white",
        textDecoration: "none",
        marginTop: "7em"
    },
    title: {
        color: "#3f51b5",
        fontWeight: "bolder",
        marginTop: "5em",
        marginBottom: "2em"
    },
})

export const EntryPage: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="sm">
            <p className={classes.title}>Sample Elementary</p>
            <h1>Welcome to Enrollment Project</h1>
            <Link to="/student/2013-09836" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" className={classes.button}>Enroll Now!</Button>
            </Link>
        </Container>
    );
}