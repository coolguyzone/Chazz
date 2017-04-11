import React, { Component } from 'react';
import Cheese from './cheese';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeCheeseFromState } from '../../actions';



const mapStateToProps = (state, ownProps) => {
  console.log('map');
  return {
    cheeseList: state.cheeseList
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ removeCheeseFromState }, dispatch);
}

class CheeseButton extends Component {
  render() {
    return (
      <div className="cheese-button">
      <button className="btn btn-default" onClick={(event) => {
        event.preventDefault();
        this.props.removeCheeseFromState(0, this.props.cheeseList);
      } }>I've Tried It!</button>
    </div>
    )
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(CheeseButton)
