import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import { UIControlsSection } from '../UIControlsSection';
import UIControls from '../../../Components/UI/UIControls/UIControls';

import { controlsConfigMock } from '../../../config/controlsMockTemplate';

configure({
    adapter: new Adapter()
});

describe('<UIControlsSection />', () => {
    const props = {
        controlsConfig: controlsConfigMock,
        onControlClicked: jest.fn(),
        onAddGroupItem: jest.fn(),
        onDeleteGroupItem: jest.fn(),
        onUpdateControl: jest.fn(),

    };

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UIControlsSection {...props} />);
    });

    it('should match the snapshot', () => {
        const tree = renderer.create(<UIControlsSection {...props} />);
        expect(tree).toMatchSnapshot();
    });

    it('should render UI controls', () => {
        expect(wrapper.find(UIControls)).toHaveLength(1);
    });

    it('should handle delete group item button clicked', () => {
        const instance = wrapper.instance();

        const spy = jest.spyOn(instance, 'handleDeleteGroupItem');

        instance.forceUpdate();

        const uiControls = wrapper.find(UIControls);

        const mockControlIdentifier = 'mockControlIdentifier';
        const mockControlParent = 'mockControlParent';

        uiControls.props().onDeleteGroupItem(mockControlIdentifier, mockControlParent);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(mockControlIdentifier, mockControlParent);
    });

    it('should handle add group item button clicked when passed through from UIControls', () => {
        const instance = wrapper.instance();

        const spy = jest.spyOn(instance, 'handleAddGroupItem');

        instance.forceUpdate();

        const uiControls = wrapper.find(UIControls);

        const mockControlParent = 'mockControlParent';

        uiControls.props().onAddGroupItem(mockControlParent);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(mockControlParent);
    });

});