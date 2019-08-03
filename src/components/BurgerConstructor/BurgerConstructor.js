import React from "react";
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { ingredients } from "../../configs/ingredients";
import Controls from "../Controls/Controls";
import uuidv1 from 'uuid/v1';



export default class BurgerConstructor extends React.Component {
  state = {
    ingredients: ingredients,
    chosedIngredients: ingredients.slice(),
  }

  addIngredient = (array) => {
    this.setState({ 
      chosedIngredients: array 
    })
  }

  deleteIngredient = (array) => {
    this.setState({
      chosedIngredients: array
    })
  }

  render() {
    return (
      <div className="wrap">
        <ul className="ingredients-list">
          {this.state.ingredients.map((item, i) => 
            <React.Fragment>
              <div className ="igredient-wrapper">
                <BurgerIngredient item={item}  key={i}/>
                <Controls item={item} 
                          onAdd={this.addIngredient} 
                          onDelete={this.deleteIngredient} 
                          ingredients = {this.state.chosedIngredients} 
                          key={() => uuidv1()} />
              </div>
            </React.Fragment>
          )}
        </ul>
        <h2>You burger will consist with:</h2>
        <ul className="ingredients-list">
          {this.state.chosedIngredients.map((item, i) => <BurgerIngredient item={item} key={i+900} />)}
        </ul>        
      </div>
      
    )
  }
}

