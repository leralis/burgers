import React from "react";

const Button = ({value}) => {
    return (
        <div className="button-wrapper">
            <button className="button">{value}</button>
        </div>
        
    )
}

export default Button;