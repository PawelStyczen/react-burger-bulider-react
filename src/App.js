import Layout from "./containers/Layout/Layout";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import BurgerBulider from "./containers/BurgerBulider/BurgerBulider";
import Checkout from "./containers/Checkout/Checkout";

import Orders from "./containers/Orders/Orders";
import Auth from './containers/Auth/Auth'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={BurgerBulider} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
