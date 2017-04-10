import React, {Component} from 'react';
import Cheese from './cheese';
import {connect} from 'react-redux';

// const Cheeses = () => (
//   <div className="col-md-8" id="cheeses">
//   <div className="row">
//     <Cheese cheeseName='test1' /><Cheese cheeseName='stinky' />
//   </div>
//   <div className="row"></div>
//     <Cheese cheeseName='ched' /><Cheese cheeseName='pepjack' />
//   </div>
// );

const mapStateToProps = (state, ownProps) => {
    return {cheeseList: state.cheeseList,
      animalDropdownSelection: state.animalDropdownSelection, firmnessDropdownSelection: state.firmnessDropdownSelection}
}

class Cheeses extends Component {
    cheeseCreator() {
        //variable with the number of cheese hits saved in state
        let x = this.props.cheeseList.length;
        //count is the number of times a cheese has been added to the array to be rendered
        let count = 0;
        let cheeseArray = [];

        if (x === 0 && this.props.firmnessDropdownSelection != "Firmness" && this.props.animalDropdownSelection != "Animal") {
            return <h2>No Results!</h2>;
        }

        while (x > 0 && count < 4) {
            cheeseArray.push(<Cheese cheeseName={this.props.cheeseList[count].name}/>);
            count++;
            x--;
        }
        return (cheeseArray);
    }

    render() {
        return (
            <div className="col-md-8" id="cheeses">
                <div className="row">
                        {this.cheeseCreator()}
                </div>
            </div>
        )
    }
}

// export default Cheeses;
export default connect(mapStateToProps)(Cheeses)
