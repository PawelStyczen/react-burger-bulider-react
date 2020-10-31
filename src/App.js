import Layout from "./containers/Layout/Layout";
import React, { Component } from "react";
import BurgerBulider from "./containers/BurgerBulider/BurgerBulider";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBulider />
          <Checkout />
        </Layout>
      </div>
    );
  }
}
export default App;
