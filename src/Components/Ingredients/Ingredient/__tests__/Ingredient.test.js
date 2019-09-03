import React from 'react';
import renderer from 'react-test-renderer';

import Ingredient from '../Ingredient';

describe('<Ingredient />', () => {
    it('should match the snapshot', () => {
        const props = {
            ingredientInfo: {
                text: "Ingredient 1 Text"
            }
        };

        const tree = renderer.create(<Ingredient {...props} />);

        expect(tree).toMatchSnapshot();
    });
});