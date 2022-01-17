import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import { Classes } from "../components/Classes";
import { Announcement } from "../components/Announcement";
import { Schedule } from "../components/Schedule";
import Typography from '@material-ui/core/Typography';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    container: {
        marginTop: "5vh"
    },
    content: {
        marginTop: "7vh"
    },
    table: {
        minWidth: 650,
    },
    table_header: {
        fontWeight: "bolder"
    },
});

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
            <Typography>{children}</Typography>
        )}
      </div>
    );
  }

export const HomePage: React.FC<{}> = () => {
    const classes = useStyles();
    const [value, setValue] = useState('Home');
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return(
        <Container className={classes.container} fixed>
            <Paper className={classes.root}>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    value={value}
                    onChange={handleChange}
                >
                    <Tab value="Home" label="Home" />
                    <Tab value="Classes" label="Classes" />
                    <Tab value="Schedule" label="Schedule" />
                </Tabs>
            </Paper>
            <div className={classes.content}>
                <TabPanel value={value} index="Home">
                    <Announcement />
                </TabPanel>
                <TabPanel value={value} index="Classes">
                    <Classes />
                </TabPanel>
                <TabPanel value={value} index="Schedule">
                    <Schedule />
                </TabPanel>
            </div>
        </Container>
    );
}