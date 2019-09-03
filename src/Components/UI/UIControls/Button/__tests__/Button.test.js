import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';

describe('<Button />', () => {
    it('should match the snapshot', () => {
        const props = {
            disabled: false,
            id: 'button_id',
            name: 'button_name',
            text: 'button_text',
            clicked: jest.fn()
        };

        const tree = renderer.create(<Button {...props} />);

        expect(tree).toMatchSnapshot();
    });
});