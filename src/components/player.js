import React, { Component } from 'react';
import { randomPlaylist } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {
    uri: state.uri
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ randomPlaylist }, dispatch);
};


class Player extends Component {
  render() {
    return (

      <div className="col-md-4" id="player">
        Player Component
        <iframe src={`https://embed.spotify.com/?uri=${this.props.uri}`} width="300" height="350" frameBorder="0" allowTransparency="true"></iframe>
        <button onClick={(event) => {this.props.randomPlaylist()}} className="btn btn-default" >New Jazz Playlist</button>
      </div>

    )
  }
}



export default connect (mapStateToProps, mapDispatchToProps)(Player);
