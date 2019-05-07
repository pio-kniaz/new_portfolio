import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const mapAccessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class ContactMap extends React.Component {
  state = {
    viewport: {
      width: '100%',
      height: 700,
      latitude: 52.22967560,
      longitude: 21.01222870,
      zoom: 13,
    },
    markerVisible: true,
  };

  static propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const { viewport, markerVisible } = this.state;
    const { title, subtitle } = this.props;
    return (
      <div className="Contact__map">
        <MapGL
          ref={this.mapRef}
          {...viewport}
          mapboxApiAccessToken={mapAccessToken}
          mapStyle="mapbox://styles/mapbox/dark-v9"
        >
          <div className="Contact__content">
            <p className="Contact__content-title">
              {title}
            </p>
            <p className="Contact__content-subtitle">{subtitle}</p>
          </div>
          {markerVisible && (
            <Marker
              draggable
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#fff" />
            </Marker>
          )}
        </MapGL>
      </div>
    );
  }
}

export default ContactMap;
