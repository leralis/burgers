import React from 'react';
import BurgersList from '../components/BurgersList/BurgersList';
import BurgerConstructor from '../components/BurgerConstructor/BurgerConstructor';

import { connect } from "react-redux";


const PageTemplate = ({isBurgerChosen, chosenBurger}) => {
    return (
            <div className="wrapper">
                { !isBurgerChosen 
                    ?   <React.Fragment>
                            <h1 className="page-title">Choose a burger from our menu</h1>
                            <BurgersList/> 
                        </React.Fragment>
                    :   <React.Fragment>
                            <h1 className="page-title">You can add or delete some ingredients of {chosenBurger}:</h1> 
                            <BurgerConstructor />
                        </React.Fragment>
                }
            </div>
        )
}

const mapStateToProps = state => ({
    isBurgerChosen: state.isBurgerChosen,
    chosenBurger: state.chosenBurger
  });

  export default connect(mapStateToProps) (PageTemplate); 