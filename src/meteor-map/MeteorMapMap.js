import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default class MeteorMapMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latlng: {
        lat: 51.505,
        lng: -0.09
      },
      zoom: 12
    };
  }

  onClickSet = e => {
    this.setState({
      latlng: {
        lat: 22.505,
        lng: -0.09
      }
    });
  };

  onViewportChanged = viewport => {
    this.setState({ latlng: viewport.center, zoom: viewport.zoom });
  };

  render() {
    return (
      <React.Fragment>
        <Map
          center={this.state.latlng}
          zoom={this.state.zoom}
          style={{ height: "400px" }}
          onClick={this.onClickSet}
          onViewportChanged={this.onViewportChanged}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={this.state.latlng}>
            <Popup>
              <span>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </span>
            </Popup>
          </Marker>
        </Map>
      </React.Fragment>
    );
  }
}
