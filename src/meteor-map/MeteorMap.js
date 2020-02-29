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
      zoom: 10
    };
  }

  onViewportChanged = viewport => {
    this.setState({ latlng: viewport.center, zoom: viewport.zoom });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MeteorMapMap
          latlng={this.state.latlng}
          zoom={this.state.zoom}
          onViewportChanged={this.onViewportChanged}
        />
        <MeteorTable />
      </React.Fragment>
    );
  }
}
