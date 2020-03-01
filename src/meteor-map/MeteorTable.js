import React from "react";
import MUIDataTable from "mui-datatables";

export default function MeteorTable(props) {
  const handleRowClick = row => {
    props.onRowClicked(row);
  };

  const options = {
    filterType: "checkbox",
    onRowClick: row => handleRowClick(row)
  };

  const columns = props.columns ? props.columns : [];
  const data = props.data ? props.data : [];

  return (
    <React.Fragment>
      <MUIDataTable
        title={"Data"}
        data={data}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  );
}
