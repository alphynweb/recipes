import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Recipes from '../Recipes';
import Recipe from '../Recipe/Recipe';

configure({
    adapter: new Adapter()
});

describe('<Recipes />', () => {
    let wrapper;

    const props = {
        recipesInfo: [
            {
                recipe: {
                    label: "Recipe 1",
                    image: "Recipe 1 Image Url"
                },
                recipe: {
                    label: "Recipe 2",
                    image: "Recipe 2 Image Url"
                }
            }
        ],
        onRecipeClicked: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<Recipes {...props} />);
    });

    it('should match the snapshot when there are no recipes returned', () => {
        const tree = renderer.create(<Recipes {...props} />);

        expect(tree).toMatchSnapshot();
    });

    it('should match the snapshot when there are recipes returned', () => {
        const props = {
            recipesInfo: [
                {
                    recipe: {
                        label: "Recipe 1",
                        image: "Recipe 1 Image Url"
                    },
                    recipe: {
                        label: "Recipe 2",
                        image: "Recipe 2 Image Url"
                    }
                }
            ],
            onRecipeClicked: jest.fn()
        };

        const tree = renderer.create(<Recipes {...props} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should display recipes when recipesInfo contains some recipes', () => {
        wrapper.setProps({
            recipesInfo: [
                {
                    recipe1: "recipe1"
                },
                {
                    recipe2: "recipe2"
                }
            ]
        });

        expect(wrapper.find(Recipe)).toHaveLength(2);
    });

    it('should not display recipes when recipesInfo is empty', () => {
        expect(wrapper.find(Recipes)).toHaveLength(0);
    });
});