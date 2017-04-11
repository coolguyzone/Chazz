import React, {Component} from 'react';
import {connect} from 'react-redux';
import RemovedCheese from './removed-cheese'

const mapStateToProps = (state, ownProps) => {
  return {
    removedCheeses: state.removedCheeses
  };
};

class TastedMain extends Component {
  buildRemovedCheeseList() {
    let x = this.props.removedCheeses.length;
    let count = 0;
    let removedCheeseArray = [];

    if (x === 0) {
      return <h2>You haven't tasted any cheeses, breh!</h2>;
    }

    while (x > 0) {
      removedCheeseArray.push(
        <RemovedCheese
          cheeseName={this.props.removedCheeses[count][0].name}
          key={this.props.removedCheeses[count][0].name}
        />
      );
      count++;
      x--;
    }
    return (removedCheeseArray);
  }

  render() {
    return (
      <div className="col-md-8" id="tasted-main">
        {this.buildRemovedCheeseList()}
      </div>
    );
  }

}

export default connect(mapStateToProps)(TastedMain);
