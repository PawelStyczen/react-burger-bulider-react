import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact> Burger Bulider</NavigationItem>
    <NavigationItem link="/orders"> Orders</NavigationItem>
{!props.isAuthenticated 
? <NavigationItem link="/auth" exact>Authentication</NavigationItem> 
: <NavigationItem link="/logout" exact>Logout</NavigationItem> }
  </ul>
);

export default navigationItems;
