import React from 'react';
import renderer from 'react-test-renderer';

import AddGroupItemButton from '../AddGroupItemButton';

describe('<AddGroupItemButton />', () => {
    it('should match the snapshot', () => {
        const props = {
            controlParent: 'controlParent',
            disabled: false,
            id: 'AddGroupItemButton_id',
            name: 'AddGroupItemButton_name',
            text: 'AddGroupItemButton_text',
            clicked: jest.fn()
        };

        const tree = renderer.create(<AddGroupItemButton {...props} />);

        expect(tree).toMatchSnapshot();
    });
});