import React, { Component } from 'react';
import { initialPlaylist, nextPlaylist } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import arrayShuffler from '../helpers/array-shuffler.js';
import axios from 'axios';
const mapStateToProps = (state, ownProps) => {
  return {
    uriArray: state.playlist.uriArray,
    next: state.playlist.next
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ initialPlaylist, nextPlaylist }, dispatch);
};
class Player extends Component {
  render() {
    let uri = '';
    if (this.props.uriArray.length === 0) {
      uri = "spotify:user:gita1503:playlist:2qkXmULVYKfaQVLYQiuMJA";
    }
    else{
      uri = this.props.uriArray[this.props.next];
    }
    return (
      <div className="col-md-4" id="player">
        <iframe src={
          `https://embed.spotify.com/?uri=${uri}`
        } width="300" height="350" frameBorder="0" allowTransparency="true"></iframe>
        <button onClick={
          (event) => {
            if(this.props.next === 0) {
              this.props.initialPlaylist();
            }
            else {
              this.props.nextPlaylist();
            }
          }} className="btn btn-default" >New Jazz Playlist</button>
      </div>
    )
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Player);
