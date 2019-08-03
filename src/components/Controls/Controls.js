import React from "react";

const Button = ({item, onAdd, onDelete, ingredients}) => {
    
    const handleAdd = () => {
        let result = ingredients;
        result.push(item)
        onAdd(result)
    }

    const handleDelete = () => {
        for (let i = 0; i<ingredients.length; i++){
            if(ingredients[i].name === item.name){
                let result = ingredients.filter(item => item.name !== ingredients[i].name);
                onDelete(result)
            }
        }
    }

    return (
        <div className="controls">
            <button className="controls__button add" onClick={handleAdd} >Add</button>
            <button className="controls__button delete" onClick={handleDelete}>Delete</button>
        </div>
       
    )
}

export default Button;