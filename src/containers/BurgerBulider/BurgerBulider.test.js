import React from 'react';
import { BurgerBulider } from "./BurgerBulider";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BulidControls from '../../components/Burger/BulidControls/BulidControls'


configure({adapter: new Adapter()});

describe('<BurgerBulider />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBulider onInitIngredients={() => {}}/>);
    })

    it('should render <BulidControls /> when reciving ingredients', ()=>{
        wrapper.setProps({ings: {Salad: 0}});
        expect(wrapper.find(BulidControls)).toHaveLength(1);
    })
})