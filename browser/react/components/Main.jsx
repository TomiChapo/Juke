import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import RouteHook from 'react-route-hook';
import SidebarContainer from '../containers/SidebarContainer';
import PlayerContainer from '../containers/PlayerContainer';
import AlbumsContainer from '../containers/AlbumsContainer';
import AlbumContainer from '../containers/AlbumContainer';
import FilterableArtistsContainer from '../containers/FilterableArtistsContainer';
import ArtistContainer from '../containers/ArtistContainer';
import NewPlaylistContainer from '../containers/NewPlaylistContainer';
import LyricsContainer from '../containers/LyricsContainer';
import PlaylistContainer from '../containers/PlaylistContainer';
import StationsContainer from '../containers/StationsContainer';
import { fetchSongs } from '../action-creators/songs';
import { fetchAlbum, fetchAlbums } from '../action-creators/albums';
import { fetchArtist, fetchArtists } from '../action-creators/artists';
import StationContainer from '../containers/StationContainer';
import store from '../store';

const onStationsEnter = () => {
  store.dispatch(fetchSongs());
};

const onAlbumEnter = props => {
  store.dispatch(fetchAlbum(props.match.params.id));
};

const onAlbumsEnter = props => {
  store.dispatch(fetchAlbums());
};

const onArtistsEnter = props => {
  store.dispatch(fetchArtists());
};
const onArtistEnter = props => {
  store.dispatch(fetchArtist(props.match.params.id));
};
const onNewPlaylistEnter = props => {};
const onPlaylistEnter = props => {};
const onLyricsEnter = props => {};

export default () => (
  <div id="main" className="container-fluid">
    <SidebarContainer />
    <div className="col-xs-10">
      <Switch>
        <RouteHook
          exact
          path="/albums"
          component={AlbumsContainer}
          onEnter={onAlbumsEnter}
        />
        <RouteHook
          path="/albums/:id"
          component={AlbumContainer}
          onEnter={onAlbumEnter}
        />
        <RouteHook
          path="/artists"
          exact
          component={FilterableArtistsContainer}
          onEnter={onArtistsEnter}
        />
        <RouteHook
          path="/artists/:id"
          component={ArtistContainer}
          onEnter={onArtistEnter}
        />
        <RouteHook
          path="/playlists/new"
          component={NewPlaylistContainer}
          onEnter={onNewPlaylistEnter}
        />
        <RouteHook
          path="/playlists/:id"
          component={PlaylistContainer}
          onEnter={onPlaylistEnter}
        />
        <RouteHook
          path="/lyrics"
          component={LyricsContainer}
          onEnter={onLyricsEnter}
        />
        <RouteHook
          exact
          path="/stations"
          component={StationsContainer}
          onEnter={onStationsEnter}
        />
        <RouteHook
          path="/stations/:genreName"
          component={StationContainer}
          onEnter={onStationsEnter}
        />
        <Redirect from="/" to="/albums" />
      </Switch>
    </div>
    <PlayerContainer />
  </div>
);
