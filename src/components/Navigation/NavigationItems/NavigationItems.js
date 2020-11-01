import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact> Burger Bulider</NavigationItem>
    <NavigationItem link="/orders"> Orders</NavigationItem>
  </ul>
);

export default navigationItems;
