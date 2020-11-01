import Layout from "./containers/Layout/Layout";
import React, { Component } from "react";
import {Route} from 'react-router-dom';
import BurgerBulider from "./containers/BurgerBulider/BurgerBulider";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={BurgerBulider} />
          <Route path="/checkout" component={Checkout} />
        </Layout>
      </div>
    );
  }
}
export default App;
