import React from 'react';
import renderer from 'react-test-renderer';

import Recipe from '../Recipe';

describe('<Recipe />', () => {
    it('should match the snapshot', () => {
        const props = {
            clicked: jest.fn(),
            recipeInfo: {
                recipe: {
                    label: 'Recipe Label',
                    image: 'Recipe Image Url'
                }
            }
        };

        const tree = renderer.create(<Recipe {...props} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});