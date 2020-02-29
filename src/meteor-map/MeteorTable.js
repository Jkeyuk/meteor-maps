import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import meteorData from "./meteorData.json";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

const columns = [
  { id: "id", label: "Id", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "year", label: "Year", minWidth: 100 },
  { id: "mass (g)", label: "Mass(g)", minWidth: 170 },
  { id: "reclat", label: "Lat", minWidth: 170 },
  { id: "reclong", label: "Lng", minWidth: 170 }
];

const rows = [];

meteorData.forEach(row => {
  rows.push(
    createData(
      row.id,
      row.name,
      row.year,
      row["mass (g)"],
      row.reclat,
      row.reclong
    )
  );
});

function createData(id, name, year, mass, reclat, reclong) {
  return { id, name, year, "mass (g)": mass, reclat, reclong };
}

export default function MeteorTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = row => {
    props.onRowClicked(row);
  };

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      key={row.id}
                      onClick={() => handleRowClick(row)}
                      hover={true}
                    >
                      {columns.map(col => {
                        return (
                          <TableCell key={col.id}>{row[col.id]}</TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
}
