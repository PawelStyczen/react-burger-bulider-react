import React, { Component } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

  // componentWillUpdate() {
  //   console.log('[OrderSummary] will update')
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicio</p>
        <ul>{ingredientSummary}</ul>
        <p>Total Price: {this.props.price.toFixed(2)} </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
