import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const MeteorTable = props => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const returnFilteredRows = data => {
    return data
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(row => {
        return (
          <TableRow hover key={row.id}>
            {props.columns.map(column => {
              return (
                <TableCell key={column.name}>{row[column.name]}</TableCell>
              );
            })}
          </TableRow>
        );
      });
  };

  return (
    <Paper>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {props.columns.map(c => {
                return <TableCell key={c.name}>{c.label}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>{returnFilteredRows(props.data)}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

MeteorTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  onRowClicked: PropTypes.func
};

export default MeteorTable;
