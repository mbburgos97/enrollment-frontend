import React from "react";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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

export const Classes: React.FC<{}> = () => {
    const classes = useStyles();

    return(
        <TableContainer component={Paper}>
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
    );
}

