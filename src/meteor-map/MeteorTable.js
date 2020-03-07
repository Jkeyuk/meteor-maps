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
  const [data, setData] = React.useState(props.data);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onTextFieldChange = e => {
    const val = e.target.value;
    val.trim()
      ? setData(
          props.data.filter(row =>
            row["name"].toUpperCase().includes(val.trim().toUpperCase())
          )
        )
      : setData(props.data);
    setPage(0);
  };

  const returnFilteredRows = rows => {
    return rows
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
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={onTextFieldChange}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {props.columns.map(c => {
                return <TableCell key={c.name}>{c.label}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>{returnFilteredRows(data)}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

MeteorTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onRowClicked: PropTypes.func.isRequired
};

MeteorTable.defaultProps = {
  data: [],
  columns: [],
  onRowClicked: () => {}
};

export default MeteorTable;
