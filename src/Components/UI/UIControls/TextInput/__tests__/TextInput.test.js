import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from '../TextInput';

describe('<TextInput />', () => {
    it('should match the snapshot', () => {
        const props = {
            controlIdentifier: 'controlIdentifier',
            controlParent: 'controlParent',
            id: 'TextInput_id',
            name: 'TextInput_name',
            type: 'TextInput_type',
            value: 'TextInput_value',
            placeholder: 'TextInput_placeholder',
            changed: jest.fn(),
            deleteGroupItems: true,
            onDeleteGroupItem: jest.fn()
        };

        const tree = renderer.create(<TextInput {...props} />);
        expect(tree).toMatchSnapshot();
    });
});