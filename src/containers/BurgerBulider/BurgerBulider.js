import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BulidControls from '../../components/Burger/BulidControls/BulidControls';

class BurgerBulider extends Component {
    
    
    state = {
        ingredients: {
            Salad:0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        }
    }
    
    render() {
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BulidControls />
            </React.Fragment>
        );
    }
}

export default BurgerBulider;