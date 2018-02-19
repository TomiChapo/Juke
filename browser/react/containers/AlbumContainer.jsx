import React from 'react';
import { start } from '../action-creators/player';
import { connect } from 'react-redux';
import SingleAlbum from '../components/SingleAlbum';

const mapStateToProps = function(state, ownProps) {
  return {
    currentSong: state.player.currentSong,
    album: state.albums.selected,
  };
};
const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    start: (song, list) => {
      dispatch(start(song, list));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbum);
