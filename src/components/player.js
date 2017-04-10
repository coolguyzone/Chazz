import React, { Component } from 'react';
import { randomPlaylist } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';


const mapStateToProps = (state, ownProps) => {
  return {
    uri: state.playlist[state.playlist.length - 1]
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ randomPlaylist }, dispatch);
};


function getSpotify() {

  let query = 'jazz blues';
  let type = 'playlist';

  let url = `https://api.spotify.com/v1/search?q=${query}&type=playlist&market=US&limit=50`;

  return axios
    .get(url)
    .then((response) => {
      return response.data.playlists.items;
    })
    .then((array) => {

      let random = Math.floor(Math.random() * 50);
      console.log(array[random].uri);
      return array[random].uri;
    })
    .catch((err) => {
      return null;
    });

};


class Player extends Component {

  render() {

    return (

      <div className="col-md-4" id="player">
        <iframe src={`https://embed.spotify.com/?uri=${this.props.uri}`} width="300" height="350" frameBorder="0" allowTransparency="true"></iframe>
        <button onClick={(event) => {this.props.randomPlaylist()}} className="btn btn-default" >New Jazz Playlist</button>
      </div>

    )
  }
}



export default connect (mapStateToProps, mapDispatchToProps)(Player);
