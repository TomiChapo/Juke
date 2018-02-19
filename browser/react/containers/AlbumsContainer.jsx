import React from 'react';
import { connect } from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = function(state, ownProps) {
  return {
    albums: state.albums.list,
  };
};
const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
