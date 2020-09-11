import React from "react";
import bulidControls from "../BulidControls";
import classes from "./BulidControl.css";

const bulidControl = (props) => (
  <div className={classes.BulidControl}>
    <div className={classes.Label}> {props.label}</div>

    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);

export default bulidControl;
