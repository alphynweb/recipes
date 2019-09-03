import React from 'react';
import renderer from 'react-test-renderer';

import Ingredients from '../Ingredients';

describe('<Ingredients />', () => {
    it('should match the snapshot', () => {
        const props = {
            ingredients: [
                {
                    text: 'Ingredient 1'
                },
                {
                    text: 'Ingredient 2'
                }
            ]
        };

        const tree = renderer.create(<Ingredients {...props} />);

        expect(tree).toMatchSnapshot();
    });
});