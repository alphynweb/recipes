import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { TopBar } from '../TopBar';

configure({
    adapter: new Adapter()
});

describe('<TopBar />', () => {
    let wrapper;

    const props = {
        showControls: false,
        onToggleControls: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<TopBar {...props} />);
    });

    it('should match the snapshot', () => {
        const tree = renderer.create(<TopBar {...props} />);
        expect(tree).toMatchSnapshot();
    });

    it('should handle toggleControls being clicked', () => {
        const instance = wrapper.instance();

        const spy = jest.spyOn(instance, 'handleToggleClicked');

        instance.forceUpdate();

        const button = wrapper.find('#toggleControls');

        button.props().onClick();

        expect(spy).toHaveBeenCalledTimes(1);
    });
});