import React, { Component } from 'react';
import { initialPlaylist, nextPlaylist } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import arrayShuffler from '../helpers/array-shuffler.js';
import axios from 'axios';


const mapStateToProps = (state, ownProps) => {
  console.log('map');
  return {
    uriArray: state.playlist.uriArray,
    next: state.playlist.next
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ initialPlaylist, nextPlaylist }, dispatch);
};


class Player extends Component {

  componentWillMount() {
    this.props = {
      ...this.props,
      uriArray: ["spotify:user:johannesbosma:playlist:3r7WzQS8qyrmvRj4ZQFexg"],
      next: 0
    };
  }

  render() {

    console.log('render');
    return (

      <div className="col-md-4" id="player">
        <iframe src={
          `https://embed.spotify.com/?uri=${this.props.uriArray[this.props.next]}`
        } width="300" height="340" frameBorder="0" allowTransparency="true"></iframe>
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
