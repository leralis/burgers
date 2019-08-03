import React from "react";
import { connect } from "react-redux";
import { onBurgerChoose } from '../../store/actions';

const BurgerItem = ({burger, onBurgerChoose}) => {
    return (
        <li className="burger-list__item" onClick={onBurgerChoose}>
            <div className="burger-list__image">
                <img src={burger.image} alt="burger" />
            </div>
            <div className="burger-list__title"> {burger.name} </div>
        </li> 
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onBurgerChoose: (e) => dispatch(onBurgerChoose(e)),
    }
  }
  
  
export default connect(null, mapDispatchToProps) (BurgerItem);


