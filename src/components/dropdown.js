import React from 'react';

const Dropdown = (props) => (

  <div className="dropdown col-md-6">
  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    {props.title}
    <span className="caret"></span>
  </button>
  <ul className="dropdown-menu dropdown-right" aria-labelledby="dropdownMenu1">
    <li><a href="#">{props.option1}</a></li>
    <li><a href="#">{props.option2}</a></li>
    <li><a href="#">{props.option3}</a></li>
    <li><a href="#">{props.option4}</a></li>
  </ul>
</div>



)

export default Dropdown;
