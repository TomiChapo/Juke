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
import StationContainer from '../containers/StationContainer';
import store from '../store';

const onStationsEnter = () => {
  store.dispatch(fetchSongs());
};

export default () => (
  <div id="main" className="container-fluid">
    <SidebarContainer />
    <div className="col-xs-10">
      <Switch>
        <Route exact path="/albums" component={AlbumsContainer} />
        <Route path="/albums/:id" component={AlbumContainer} />
        <Route path="/artists" exact component={FilterableArtistsContainer} />
        <Route path="/artists/:id" component={ArtistContainer} />
        <Route path="/playlists/new" component={NewPlaylistContainer} />
        <Route path="/playlists/:id" component={PlaylistContainer} />
        <Route path="/lyrics" component={LyricsContainer} />
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
