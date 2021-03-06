import React from 'react';
import { FiPlus,FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58,68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

function OrphanagesMap(){
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Jundiaí</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.1857076, -46.8978057]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWlndWVsaHAzNzMiLCJhIjoiY2tnNzE1MnptMDJ2NzJwanh4MGUxcHllMyJ9.G05-Q0BxD75MOCFG5uk9yw`} />
        <Marker
            icon={mapIcon}
            position={[-23.1857076, -46.8978057]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              Casa da Criança
              <Link to={`/orphanages/1`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        )
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
  }

export default OrphanagesMap;
