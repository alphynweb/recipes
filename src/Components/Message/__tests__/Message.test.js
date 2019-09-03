import React from 'react';
import renderer from 'react-test-renderer';

import Message from '../Message';

describe('<Message />', () => {
    it('should match the snapshot when recipes are found', () => {
        const tree = renderer.create(<Message messageType={''} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should match the snapshot when no recipes are found', () => {
        const props = {
            messageType: 'No recipes found'
        };

        const tree = renderer.create(<Message {...props} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});