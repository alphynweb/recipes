import React from 'react';
import renderer from 'react-test-renderer';

import ModalRecipe from '../ModalRecipe';

describe('<ModalRecipe />', () => {
    it('should match the snapshot', () => {
        const props = {
            recipeInfo: {
                image: 'Recipe Image URL',
                ingredients: [
                    {
                        text: 'bacon'
                    },
                    {
                        text: 'ham'
                    }
                ],
                label: 'Recipe label',
                url: 'Recipe url'
            }
        };

        const tree = renderer.create(<ModalRecipe {...props} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});