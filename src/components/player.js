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

  componentWillMount() {
    console.log(this.state);
    console.log(this.props);
    this.props = {
      ...this.props,
      uriArray: 'spotify:user:1138592905:playlist:1S9dCS4awycMSWevkKVsKw',
      next: 0
    };
    console.log(this.props);

  }

  render() {

    return (

      <div className="col-md-4" id="player">
        <iframe src={`https://embed.spotify.com/?uri=${
          this.props.uriArray[this.props.next]
        }`} width="300" height="350" frameBorder="0" allowTransparency="true"></iframe>
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
