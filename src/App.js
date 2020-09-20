import Layout from './containers/Layout/Layout'
import React, { Component } from "react";
import BurgerBulider from './containers/BurgerBulider/BurgerBulider'

class App extends Component {
  render() {
    return <div>
      <Layout>
      <BurgerBulider />

      </Layout>
    </div>;
  }
}
export default App;
