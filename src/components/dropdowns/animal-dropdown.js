import React, { Component } from 'react';
import { selectAnimalDropdown, doAnimalCheeseSearch } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    animalDropdownSelection: state.animalDropdownSelection
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ selectAnimalDropdown, doAnimalCheeseSearch }, dispatch);
}

class AnimalDropdown extends Component {
  render() {
    return (

      <div className="dropdown col-md-6">
      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        {this.props.animalDropdownSelection}
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu dropdown-right" aria-labelledby="dropdownMenu1">
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
          this.props.selectAnimalDropdown(this.props.option1)
          this.props.doAnimalCheeseSearch(this.props.option1)
         }}>
        {this.props.option1}
        </a></li>
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
          this.props.selectAnimalDropdown(this.props.option2)
          this.props.doAnimalCheeseSearch(this.props.option2);
         }}>
        {this.props.option2}
        </a></li>
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
          this.props.selectAnimalDropdown(this.props.option3)
          this.props.doAnimalCheeseSearch(this.props.option3);
         }}>
        {this.props.option3}
        </a></li>
        <li><a href="#" onClick={(event) => {
          event.preventDefault();
          this.props.selectAnimalDropdown(this.props.option4)
          this.props.doAnimalCheeseSearch(this.props.option4);
         }}>
        {this.props.option4}
        </a></li>
      </ul>
    </div>

    )
  }
}



export default connect (mapStateToProps, mapDispatchToProps)(AnimalDropdown)
