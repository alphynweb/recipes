import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import { Container } from '../Container'; // {} = seperated from redux connect
import Recipes from '../../../Components/Recipes/Recipes';
import Message from '../../../Components/Message/Message';
import Spinner from '../../../Components/UI/Spinner/Spinner';

configure({
    adapter: new Adapter()
});

describe('<Container />', () => {
    let wrapper;

    const props = {
        recipesFetched: true,
        fetchingRecipes: false,
        recipesInfo: [
            {
                recipe: {
                    label: 'label1',
                    image: 'image1'
                }
            }
        ]
    };

    beforeEach(() => {
        wrapper = shallow(<Container {...props} />);
    });

    it('should match the snapshot', () => {
        const tree = renderer.create(<Container {...props} />);
        expect(tree).toMatchSnapshot();
    });

    it('should not render any recipes when recipesFetched is false', () => {
        wrapper.setProps({
            recipesFetched: false
        });

        expect(wrapper.find(Recipes)).toHaveLength(0);
    });

    it('should not render any recipes when recipesInfo is empty', () => {
        wrapper.setProps({
            recipesInfo: [],
        });

        expect(wrapper.find(Recipes)).toHaveLength(0);
    });

    it('should not render any recipes when fetchingRecipes is true', () => {
        wrapper.setProps({
            fetchingRecipes: true
        });

        expect(wrapper.find(Recipes)).toHaveLength(0);
    });

    it('should render recipes when receiving recipesInfo and recipesFetched', () => {
        wrapper.setProps({
            recipesFetched: true
        });

        expect(wrapper.find(Recipes)).toHaveLength(1);
    });
    
    it('should display a no recipes found message when no recipes are returne for search', () => {
        wrapper.setProps({
            recipesInfo: []
        });
        expect(wrapper.find(Message)).toHaveLength(1);
    });

    it('should render the spinner when fetchingRecipes is true and recipesFetched is false', () => {
        wrapper.setProps({
            recipesFetched: false,
            fetchingRecipes: true
        });

        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('should not render a spinner when recipesFetched is true', () => {
        wrapper.setProps({
            recipesFetched: true
        });

        expect(wrapper.find(Spinner)).toHaveLength(0);
    });
});