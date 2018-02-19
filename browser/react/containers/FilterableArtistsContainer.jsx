import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import store from '../store';
import { fetchArtists } from '../action-creators/artists';
import { connect } from 'react-redux';

class FilterableArtistsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.list.filter(artist =>
      artist.name.toLowerCase().match(inputValue.toLowerCase()),
    );
    return (
      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={filteredArtists} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  artists: state.artists,
});

export default connect(mapStateToProps)(FilterableArtistsContainer);
