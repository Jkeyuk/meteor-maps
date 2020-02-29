import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default class MeteorMapMap extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnViewportChanged = this.handleOnViewportChanged.bind(this);
  }

  handleOnViewportChanged(viewport) {
    this.props.onViewportChanged(viewport);
  }

  render() {
    const messages = this.props.markerMessage;
    return (
      <React.Fragment>
        <Map
          center={this.props.latlng}
          zoom={this.props.zoom}
          style={{ height: "400px" }}
          onViewportChanged={this.handleOnViewportChanged}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={this.props.markerLatLng}>
            <Popup>
              <span>
                {messages.map(element => {
                  return <p>{element}</p>;
                })}
              </span>
            </Popup>
          </Marker>
        </Map>
      </React.Fragment>
    );
  }
}
