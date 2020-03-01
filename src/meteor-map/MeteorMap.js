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
        { id: "id", label: "Id", minWidth: 20 },
        { id: "name", label: "Name", minWidth: 50 },
        { id: "year", label: "Year", minWidth: 50 },
        { id: "mass (g)", label: "Mass(g)", minWidth: 50 },
        { id: "reclat", label: "Lat", minWidth: 50 },
        { id: "reclong", label: "Lng", minWidth: 50 }
      ]
    };
  }

  onViewportChanged = viewport => {
    this.setState({ latlng: viewport.center, zoom: viewport.zoom });
  };

  onRowClicked = row => {
    this.setState({ latlng: [row.reclat, row.reclong], zoom: 13 });
    this.setState({ markerLatLng: [row.reclat, row.reclong] });

    let messages = [];
    for (const key in row) {
      if (row.hasOwnProperty(key)) {
        const element = row[key];
        messages.push(key + ": " + element);
      }
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
