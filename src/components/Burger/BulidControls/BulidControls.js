import React from "react";
import classes from "./BulidControls.module.css";
import BulidControl from "./BulidControl/BulidControl";

const controls = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "Meat", type: "Meat" },
];

const bulidControls = (props) => (
  <div className={classes.BulidControls}>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((ctrl) => (
      <BulidControl
        key={ctrl.label}
        label={ctrl.label}
       
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton}
    disabled={!props.purchasable}>ORDER NOW</button>
  </div>
);

export default bulidControls;
