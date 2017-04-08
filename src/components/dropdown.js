import React, { Component } from 'react';
import { selectDropdown } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    dropdownSelection: state.dropdownSelection
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ selectDropdown }, dispatch);
}

class Dropdown extends Component {
  render() {
    return (

      <div className="dropdown col-md-6">
      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        {this.props.dropdownSelection}
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu dropdown-right" aria-labelledby="dropdownMenu1">
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
        this.props.selectDropdown(this.props.option1) }}>{this.props.option1}</a></li>
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
        this.props.selectDropdown(this.props.option2) }}>{this.props.option2}</a></li>
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
        this.props.selectDropdown(this.props.option3) }}>{this.props.option3}</a></li>
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
        this.props.selectDropdown(this.props.option4) }}>{this.props.option4}</a></li>
      </ul>
    </div>

    )
  }
}

// const Dropdown = (props) => (
//
//   <div className="dropdown col-md-6">
//   <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
//     {props.title}
//     <span className="caret"></span>
//   </button>
//   <ul className="dropdown-menu dropdown-right" aria-labelledby="dropdownMenu1">
//     <li><a href="#">{props.option1}</a></li>
//     <li><a href="#">{props.option2}</a></li>
//     <li><a href="#">{props.option3}</a></li>
//     <li><a href="#">{props.option4}</a></li>
//   </ul>
// </div>
//
//
//
// )
//
// export default Dropdown;

export default connect (mapStateToProps, mapDispatchToProps)(Dropdown)
