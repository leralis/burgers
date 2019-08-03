import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE, ON_BURGER_CHOOSE } from "./actions"


const initialState = {
    burgers: [],
    error: null,
    isLoading: false,
    isBurgerChosen: false,
    chosenBurger: { },

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case REQUEST_START:
            return {
                ...state,
                isLoading: true,
        };
        case REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                burgers: action.payload
        };
        case REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
        };
        case ON_BURGER_CHOOSE:
            return {
                ...state,
                isBurgerChosen: true,
                chosenBurger: action.payload
            };
        // case ADD_ING: 
        //     return {
        //         ...state,
        //         ingredients: ingredients.push(action.payload)
        //     }
        default:
            return state;
    }
}

export default reducer;