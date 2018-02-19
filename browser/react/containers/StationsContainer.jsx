import React from 'react';
import { connect } from 'react-redux';
import Stations from '../components/Stations';
import axios from 'axios';

const convertSongsToStations = songsArray => {
  const stations = {};
  songsArray.forEach(song => {
    if (!stations.hasOwnProperty(song.genre)) {
      stations[song.genre] = [];
    }
    stations[song.genre].push(song);
  });
  return stations;
};

const mapStateToProps = function(state) {
  console.log('songs: ', state.songs);
  return {
    stations: convertSongsToStations(state.songs),
  };
};
const mapDispatchToProps = function(dispatch) {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
