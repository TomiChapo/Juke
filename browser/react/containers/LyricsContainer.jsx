import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { fetchLyrics } from '../action-creators/lyrics';
import {connect} from 'react-redux'

class LyricsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      artistQuery: '',
      songQuery: '',
    };

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.fetchLyrics(this.state.artistQuery, this.state.songQuery);
    }
  }

  render() {
    return (
      <Lyrics
        text={this.props.text}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = ({ lyrics }) => ({
  text: lyrics.text,
});

const mapDispatchToProps = dispatch => ({
  fetchLyrics: (artist, song) => dispatch(fetchLyrics(artist, song)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LyricsContainer);
