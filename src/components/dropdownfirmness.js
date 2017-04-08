import React, { Component } from 'react';
import { selectFirmnessDropdown } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    firmnessDropdownSelection: state.firmnessDropdownSelection
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ selectFirmnessDropdown }, dispatch);
}

class DropdownFirmness extends Component {
  render() {
    return (

      <div className="dropdown col-md-6">
      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        {this.props.firmnessDropdownSelection}
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu dropdown-right" aria-labelledby="dropdownMenu1">
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
          this.props.selectFirmnessDropdown(this.props.option1) }}>
        {this.props.option1}
        </a></li>
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
          this.props.selectFirmnessDropdown(this.props.option2) }}>
        {this.props.option2}
        </a></li>
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
          this.props.selectFirmnessDropdown(this.props.option3) }}>
        {this.props.option3}
        </a></li>
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
          this.props.selectFirmnessDropdown(this.props.option4) }}>
        {this.props.option4}
        </a></li>
      </ul>
    </div>

    )
  }
}



export default connect (mapStateToProps, mapDispatchToProps)(DropdownFirmness)
