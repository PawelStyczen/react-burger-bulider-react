import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

import Burger from "../../components/Burger/Burger";
import BulidControls from "../../components/Burger/BulidControls/BulidControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

import * as actions from '../../store/actions/index';


const BurgerBulider = props =>  {
 const [purchasing, setPurchasing] = useState(false);


 useEffect(()=>{

  props.onInitIngredients();
 }, [])

 

 const updatePurchaseHandler = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0 ;
  }



 const purchaseHandler = () => {
    if (props.isAuthenticated){
     setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
    
  };

  const purchaseCancelHandler = () => {
 
   setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    //props.onInitPurchase();
    props.history.push('/checkout');
  };

  
    const disabledInfo = {
      ...props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }


    
    let orderSummary = null;
    let burger = props.error ? <p>Ingredients cant be loaded</p> : <Spinner />;


    if (props.ings) {
      burger = (
        <React.Fragment>
          <Burger ingredients={props.ings} />

          <BulidControls
            ingredientAdded={props.onIngredientAdded}
            ingredientRemoved={props.onIngredientRemoved}
            disabled={disabledInfo}
            ordered={purchaseHandler}
            purchasable={updatePurchaseHandler(props.ings)}
            price={props.price}
            isAuth={props.isAuthenticated}
          />
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={props.ings}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
          price={props.price}
        ></OrderSummary>
      );
    }

 

    return (
      <React.Fragment>
        <Modal
          show={purchasing}
          modalClosed={purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }

const mapStateToProps = state => {
  return {
    ings: state.burgerBulider.ingredients,
    price: state.burgerBulider.totalPrice,
    error: state.error,
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return{
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBulider, axios));
