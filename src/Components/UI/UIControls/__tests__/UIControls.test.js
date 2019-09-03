import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Adapter from 'enzyme-adapter-react-16';

import UIControls from '../UIControls';
import Button from '../Button/Button';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import TextInput from '../TextInput/TextInput';
import TextInputGroup from '../TextInputGroup/TextInputGroup';

import { controlsConfig as controlsConfigMock } from '../../../../config/controls';

configure({
    adapter: new Adapter()
});

describe('<UIControls />', () => {
    let wrapper;
    let controlsArray;

    const props = {
        controlsConfig: controlsConfigMock,
        onAddGroupItem: jest.fn(),
        onDeleteGroupItem: jest.fn(),
        onControlClicked: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<UIControls {...props} />);

        controlsArray = []; // Reset

        for (let key in controlsConfigMock) {
            controlsArray.push({
                id: key,
                controlConfig: controlsConfigMock[key]
            })
        };
    });

    it('should match the snapshot', () => {
        const tree = renderer.create(<UIControls {...props} />);

        expect(tree).toMatchSnapshot();
    });

    it('should not render any controls if controlsConfig is empty', () => {
        wrapper = shallow(<UIControls {...props} />);
        wrapper.setProps({
            controlsConfig: {}
        });
        expect(wrapper.find(Button)).toHaveLength(0);
        expect(wrapper.find(TextInput)).toHaveLength(0);
        expect(wrapper.find(TextInputGroup)).toHaveLength(0);
        expect(wrapper.find(CheckboxGroup)).toHaveLength(0);
    });

    it('should render correct number of buttons with correct props if included in controlsConfig', () => {
        const buttonsArray = controlsArray.filter(control =>
            control.controlConfig.type === 'button'
        );

        const buttonsCount = buttonsArray.length;

        // Check exists
        expect(wrapper.find(Button)).toHaveLength(buttonsCount);

        let buttonControlConfig;
        let currentButton;

        // Run through buttons and check each one
        buttonsArray.forEach((button, index) => {
            currentButton = wrapper.find(Button).at(index);
            buttonControlConfig = button.controlConfig;

            // Check correct props are set
            expect(currentButton.props().id).toBeDefined();
            expect(currentButton.props().name).toBeDefined();
            expect(currentButton.props().text).toBeDefined();
            expect(currentButton.props().type).toBeDefined();

            // Check values of props are correct
            expect(currentButton.props().id).toEqual(button.id);
            expect(currentButton.props().name).toEqual(buttonControlConfig.name);
            expect(currentButton.props().text).toEqual(buttonControlConfig.text);
            expect(currentButton.props().type).toEqual(buttonControlConfig.type);
        });
    });

    it('should render correct number of checkboxGroups with correct props if included in controlsConfig', () => {
        const onControlClicked = jest.fn();

        wrapper.setProps({
            onControlClicked: onControlClicked
        });

        const chBxGroupsArray = controlsArray.filter(control =>
            control.controlConfig.type === 'checkboxGroup'
        );

        const chBxGroupsCount = chBxGroupsArray.length;

        // Check exists
        expect(wrapper.find(CheckboxGroup)).toHaveLength(chBxGroupsCount);

        let chBxGroupControlConfig;
        let currentChbxGroup;

        // Run through checkboxGroups and check each one
        chBxGroupsArray.forEach((chBxGroup, index) => {
            currentChbxGroup = wrapper.find(CheckboxGroup).at(index);
            chBxGroupControlConfig = chBxGroup.controlConfig;

            // Check correct props are set
            expect(currentChbxGroup.props().id).toBeDefined();
            expect(currentChbxGroup.props().name).toBeDefined();
            expect(currentChbxGroup.props().title).toBeDefined();
            expect(currentChbxGroup.props().checkboxes).toBeDefined();
            expect(currentChbxGroup.props().type).toBeDefined();
            expect(currentChbxGroup.props().touched).toBeDefined();
            expect(currentChbxGroup.props().changed).toBeDefined();

            // Check values of props are correct
            expect(currentChbxGroup.props().id).toEqual(chBxGroup.id);
            expect(currentChbxGroup.props().name).toEqual(chBxGroupControlConfig.name);
            expect(currentChbxGroup.props().title).toEqual(chBxGroupControlConfig.title);
            expect(currentChbxGroup.props().checkboxes).toEqual(chBxGroupControlConfig.groupItems);
            expect(currentChbxGroup.props().type).toEqual(chBxGroupControlConfig.type);
            expect(currentChbxGroup.props().touched).toEqual(chBxGroupControlConfig.touched);
            expect(currentChbxGroup.props().changed).toEqual(onControlClicked);
        });
    });

    it('should render correct number of textInputs with correct props if included in controlsConfig', () => {
        const onControlClicked = jest.fn();

        wrapper.setProps({
            onControlClicked: onControlClicked
        });

        const textInputsArray = controlsArray.filter(control =>
            control.controlConfig.type === 'text'
        );

        const textInputsCount = textInputsArray.length;

        // Check exists
        expect(wrapper.find(TextInput)).toHaveLength(textInputsCount);

        let textInputControlConfig;
        let currentTextInput;

        // Run through buttons and check each one
        textInputsArray.forEach((textInput, index) => {
            currentTextInput = wrapper.find(TextInput).at(index);
            textInputControlConfig = textInput.controlConfig;

            // Check correct props are set
            expect(currentTextInput.props().controlIdentifier).toBeDefined();
            expect(currentTextInput.props().id).toBeDefined();
            expect(currentTextInput.props().name).toBeDefined();
            expect(currentTextInput.props().placeholder).toBeDefined();
            expect(currentTextInput.props().value).toBeDefined();
            expect(currentTextInput.props().touched).toBeDefined();
            expect(currentTextInput.props().type).toBeDefined();
            expect(currentTextInput.props().validationRequired).toBeDefined();
            expect(currentTextInput.props().changed).toBeDefined();

            // Check values of props are correct
            expect(currentTextInput.props().controlIdentifier).toEqual(textInput.id);
            expect(currentTextInput.props().id).toEqual(textInput.id);
            expect(currentTextInput.props().name).toEqual(textInputControlConfig.name);
            expect(currentTextInput.props().placeholder).toEqual(textInputControlConfig.placeholder);
            expect(currentTextInput.props().value).toEqual(textInputControlConfig.value);
            expect(currentTextInput.props().touched).toEqual(textInputControlConfig.touched);
            expect(currentTextInput.props().type).toEqual(textInputControlConfig.type);
            expect(currentTextInput.props().validationRequired).toEqual(textInputControlConfig.validationRequired);
            expect(currentTextInput.props().changed).toEqual(onControlClicked);
        });
    });

    it('should render correct number of textInputGroups with correct props if included in controlsConfig', () => {
        const textInputGroupsArray = controlsArray.filter(control =>
            control.controlConfig.type === 'textInputGroup'
        );

        const count = textInputGroupsArray.length;
        expect(wrapper.find(TextInputGroup)).toHaveLength(count);
    });

});

