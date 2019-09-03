import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextInputGroup from '../TextInputGroup';
import TextInput from '../../TextInput/TextInput';
import AddGroupItemButton from '../../AddGroupItemButton/AddGroupItemButton';

configure({
    adapter: new Adapter()
});

describe("<TextInputGroup />", () => {
    let wrapper;

    const props = {
        changed: jest.fn(),
        controlParent: 'textInputGroup_1',
        name: 'textInputGroup_1_name',
        textInputs: [
            {
                id: 'textInput1_id',
                key: 'textInput1_key',
                value: 'textInput1_value',
                placeholder: 'textInput1Placeholder'
            },
            {
                id: 'textInput2_id',
                key: 'textInput2_key',
                value: 'textInput2_value',
                placeholder: 'textInput2Placeholder'
            }
        ],
        addGroupItemButton: {
            type: "addOptionButton",
            name: 'addOptionButton',
            buttonControlParent: "textInputGroup_1",
            buttonKey: "textInputGroup_1_addGroupItem_key",
            buttonId: "textInputGroup_1_addGroupItem_id",
            buttonName: "textInputGroup_1_addGroupItem_name",
            buttonText: "textInputGroup_1_addGroupItem_text",
            disabled: false,
            clicked: jest.fn()
        },
        deleteGroupItems: true,
        title: 'textInputGroup1_title',
        type: 'textInputGroup',
        onAddGroupItem: jest.fn(),
        onDeleteGroupItem: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<TextInputGroup {...props} />);
    });

    it("Should render text inputs if text inputs are passed in as groupItems", () => {
        expect(wrapper.find(TextInput)).toHaveLength(2);
    });

    it("Should not render text inputs if no text input groupItems are passed in", () => {
        wrapper.setProps({
            textInputs: []
        })
        expect(wrapper.find(TextInput)).toHaveLength(0);
    });

    it("Should not render an addGroupItem button if no addGroupItemButton info is passed in", () => {
        wrapper.setProps({
            addGroupItemButton: false,
        });
        expect(wrapper.find(AddGroupItemButton)).toHaveLength(0);
    });
});