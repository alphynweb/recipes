import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import CheckboxGroup from '../CheckboxGroup';
import Checkbox from '../Checkbox/Checkbox';

configure({
    adapter: new Adapter()
});

describe("<CheckboxGroup />", () => {
    let wrapper;

    const props = {
        type: 'checkboxGroup',
        checkboxes: [
            {
                key: "veganHealthKey",
                value: "vegan",
                label: "Vegan",
                checked: false
            },
            {
                key: "vegetarianHealthKey",
                value: "vegetarian",
                label: "Vegetarian",
                checked: false
            },
        ],
        id: 'checkboxGroup_id',
        title: 'checkboxGroup_title',
        changed: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<CheckboxGroup {...props} />);
    });

    it('should match the snapshot', () => {
        const tree = renderer.create(<CheckboxGroup {...props} />);
        expect(tree).toMatchSnapshot();
    });

    it("Should not render checkboxes if no checkbox groupItems are passed in", () => {
        wrapper.setProps({
            checkboxes: []
        });
        expect(wrapper.find(Checkbox)).toHaveLength(0);
    });

    it("Should render checkboxes if amount of checkboxes is greater than zero", () => {
        expect(wrapper.find(Checkbox)).toHaveLength(2);
    });
});