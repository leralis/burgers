import React from "react";


const BurgerIngredient = ({item}) => {
    return (
        <li className="ingredients-list__item">
            <img src={item.img} alt="ingredient" className="ingredients-list__image" />
            <div className="ingredient-list__name"> {item.name} </div>
        </li>
    )
}

export default BurgerIngredient;
