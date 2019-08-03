import axios from 'axios';

export const REQUEST_START   = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const ON_BURGER_CHOOSE = 'ON_BURGER_CHOOSE';
export const ADD_ING = "ADD_ING";

export const sendRequest = () => {
    return (dispatch) => {
        dispatch({
            type: REQUEST_START
        })
        axios.get("http://localhost:3000/burgers")
            .then(res => {
                dispatch({
                    type: REQUEST_SUCCESS,
                    payload: res.data
                })
            })
            .catch((error)=> {
                dispatch({
                    type: REQUEST_FAILURE,
                    payload: error
                });
            })
    }
}

export const requestStart = () => ({
    type: REQUEST_START
  });
  
  export const requestSuccess = data => ({
    type: REQUEST_SUCCESS,
    payload: { data }
  });
  
  export const requestFailure = error => ({
    type: REQUEST_FAILURE,
    payload: { error }
  });

  export const onBurgerChoose = (e) => ({
      type: ON_BURGER_CHOOSE,
      payload: e.target.closest("li").textContent
  })

//   export const addIng = (e) => ({
//       type: ADD_ING,
//       ing: {
//         name: e.target.closest("li"),

//       },
      
//       payload: this.ing
//   })
