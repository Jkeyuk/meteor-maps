import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default function MeteorMapMap() {
  const position = [51.14967, -1.81];
  return (
    <React.Fragment>
      <Map center={position} zoom={5} style={{ height: "400px" }}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
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
