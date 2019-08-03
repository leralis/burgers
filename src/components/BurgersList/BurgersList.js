import React from "react";
import BurgerItem from "./BurgerItem";

import { connect } from "react-redux";
import { sendRequest } from '../../store/actions';

class BurgersList extends React.Component {
  componentDidMount() {
    this.props.sendRequest();
  }

  render() {
    return (
      <ul className="burger-list">
        { this.props.burgers.map((burgers, i) => <BurgerItem burger={burgers} key={i} /> )}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  burgers: state.burgers,
});

const mapDispatchToProps = dispatch => {
  return {
      sendRequest: () => dispatch(sendRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (BurgersList); 
