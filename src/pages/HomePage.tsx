import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

function createData(class_title: string, class_section: string, teacher: string, units: number) {
    return { class_title, class_section, teacher, units };
  }
  
const rows = [
    createData('English', 'AM-2', "Ms. Smith", 3),
    createData('Mathematics', 'PM-2', "Ms. Smith", 3),
    createData('Science', 'AM-2', "Ms. Smith", 3),
    createData('Filipino', 'PM-1', "Ms. Smith", 3),
    createData('Computer', 'AM-1', "Ms. Smith", 3),
  ];

export const HomePage: React.FC<{}> = () => {
    const classes = useStyles();

    return(
        <Container className={classes.container} fixed>
            <Paper className={classes.root}>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    value="Home"
                >
                    <Tab value="Home" label="Home" />
                    <Tab value="Classes" label="Classes" />
                    <Tab value="Schedule" label="Schedule" />
                </Tabs>
            </Paper>
            <TableContainer className={classes.content} component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.table_header}>Class Title</TableCell>
                        <TableCell className={classes.table_header} align="center">Class Section</TableCell>
                        <TableCell className={classes.table_header} align="center">Teacher</TableCell>
                        <TableCell className={classes.table_header} align="center">Units</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.class_title}>
                            <TableCell component="th" scope="row">
                                {row.class_title}
                            </TableCell>
                            <TableCell align="center">{row.class_section}</TableCell>
                            <TableCell align="center">{row.teacher}</TableCell>
                            <TableCell align="center">{row.units}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}