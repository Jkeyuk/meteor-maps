import React from "react";
import NavBar from "./NavBar";
import MeteorTable from "./MeteorTable";
import MeteorMapMap from "./MeteorMapMap";
import meteorData from "./meteorData.json";
import Box from "@material-ui/core/Box";
export default class MeteorMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latlng: {
        lat: 51.505,
        lng: -0.09
      },
      zoom: 8,
      markerLatLng: {
        lat: 51.505,
        lng: -0.09
      },
      markerMessage: ["Click a row to see the impact site"],
      data: meteorData,
      columns: [
        { name: "id", label: "Id" },
        { name: "name", label: "Name" },
        { name: "year", label: "Year" },
        { name: "mass (g)", label: "Mass(g)" },
        { name: "reclat", label: "Lat" },
        { name: "reclong", label: "Lng" }
      ]
    };
  }

  onViewportChanged = viewport => {
    this.setState({ latlng: viewport.center, zoom: viewport.zoom });
  };

  onRowClicked = row => {
    this.setState({ latlng: [row[4], row[5]], zoom: 13 });
    this.setState({ markerLatLng: [row[4], row[5]] });

    let messages = [];

    for (let index = 0; index < row.length; index++) {
      const element = row[index];
      messages.push(this.state.columns[index].label + ": " + element);
    }

    this.setState({ markerMessage: messages });
  };

  onTextFieldChange = val => {
    if (val.trim()) {
      console.log(val.trim());
      const filteredData = meteorData.filter(row => {
        return row["name"].toUpperCase().includes(val.trim().toUpperCase());
      });
      this.setState({ data: filteredData });
    } else {
      this.setState({ data: meteorData });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Box width="100%">
          <NavBar onTextFieldChange={this.onTextFieldChange} />
          <MeteorMapMap
            latlng={this.state.latlng}
            zoom={this.state.zoom}
            markerLatLng={this.state.markerLatLng}
            onViewportChanged={this.onViewportChanged}
            markerMessage={this.state.markerMessage}
          />
          <MeteorTable
            onRowClicked={this.onRowClicked}
            data={this.state.data}
            columns={this.state.columns}
          />
        </Box>
      </React.Fragment>
    );
  }
}
