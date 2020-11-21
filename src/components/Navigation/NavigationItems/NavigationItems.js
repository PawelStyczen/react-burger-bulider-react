import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      {" "}
      Burger Bulider
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders"> Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth" exact>
        Authentication
      </NavigationItem>
    ) : (
      <NavigationItem link="/logout" exact>
        Logout
      </NavigationItem>
    )}
  </ul>
);

export default navigationItems;
