import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: {
    Salad: 0,
    Bacon: 0,
    Cheese: 0,
    Meat: 0,
  },
  totalPrice: 4,
};

const INGREDIENT_PRICES = {
  Salad: 0.5,
  Cheese: 0.4,
  Ceat: 1.7,
  Bacon: 2,
  Meat: 4,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        //this copies a pointer to the state
        ...state,
        ingredients: {
          //we spread the state ingredients into new objet so that we have a new object instead of pointing to the original state
          ...state.ingredients,
          //overrading dynamically the name of the object coming in as action/payload
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };

    case actionTypes.REMOVE_INGREDIENT:
      return {
        //this copies a pointer to the state
        ...state,
        ingredients: {
          //we spread the state ingredients into new objet so that we have a new object instead of pointing to the original state
          ...state.ingredients,
          //overrading dynamically the name of the object coming in as action/payload
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };

    default:
      return state;
  }
};

export default reducer;
