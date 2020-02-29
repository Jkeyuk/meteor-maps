import React from "react";
import NavBar from "./NavBar";
import MeteorTable from "./MeteorTable";
import MeteorMapMap from "./MeteorMapMap";
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
      markerMessage: ["Click a row to see the impact site"]
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
        messages.push(key + element);
      }
    }
    this.setState({ markerMessage: messages });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MeteorMapMap
          latlng={this.state.latlng}
          zoom={this.state.zoom}
          markerLatLng={this.state.markerLatLng}
          onViewportChanged={this.onViewportChanged}
          markerMessage={this.state.markerMessage}
        />
        <MeteorTable onRowClicked={this.onRowClicked} />
      </React.Fragment>
    );
  }
}
