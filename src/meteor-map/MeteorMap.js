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
    const position = [row["reclat"], row["reclong"]];
    this.setState({ latlng: position, zoom: 13 });
    this.setState({ markerLatLng: position });

    let messages = [];
    for (const key in row) {
      if (row.hasOwnProperty(key)) {
        const element = row[key];
        messages.push(key + ": " + element);
      }
    }
    this.setState({ markerMessage: messages });
  };

  render() {
    return (
      <React.Fragment>
        <Box width="100%">
          <NavBar />
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
