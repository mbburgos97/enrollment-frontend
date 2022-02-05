import React from "react";
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC<{}> = () => {

    return(
        <Container maxWidth="sm" style={{ height: '80vh', paddingTop: "20vh", textAlign: "center" }}>    
            <p style={{ fontWeight: "bolder", fontSize: "3em" }}>Page not found!</p>
            <Link to="/">Back to Home</Link>
        </Container>
        
    );
}