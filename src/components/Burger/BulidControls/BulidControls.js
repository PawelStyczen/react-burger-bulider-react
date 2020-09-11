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
    {controls.map((ctrl) => (
      <BulidControl
        key={ctrl.label}
        label={ctrl.label}
       
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
  </div>
);

export default bulidControls;