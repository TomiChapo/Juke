import React from 'react';
import store from '../store';
import { fetchArtist } from '../action-creators/artists';
import { start } from '../action-creators/player';
import Artist from '../components/Artist';
import { connect } from 'react-redux';

const mapStateToProps = function(state, ownProps) {
  return {
    url: ownProps.match.url,
    path: ownProps.match.path,
    artist: state.artists.selected,
    currentSong: state.player.currentSong,
  };
};
const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    start: (song, list) => {
      dispatch(start(song, list));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
