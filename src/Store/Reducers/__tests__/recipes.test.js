import reducer from '../recipes';
import { initialState } from '../recipes';

import * as actionTypes from '../../Actions/actiontypes';

describe('Recipes Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            ...initialState
        });
    });

    it('should handle FETCH_RECIPES_START', () => {
        const startAction = {
            type: actionTypes.FETCH_RECIPES_START
        };
        expect(reducer(initialState, startAction)).toEqual({
            ...initialState,
            fetchingRecipes: true,
            recipesFetched: false
        });
    });

    it('should handle FETCH_RECIPES_SUCCESS', () => {
        const successAction = {
            type: actionTypes.FETCH_RECIPES_SUCCESS,
            recipesInfo: [
                {
                    recipe: 'some-recipe'
                }
            ]
        };
        expect(reducer(initialState, successAction)).toEqual({
            ...initialState,
            recipesFetched: true,
            recipesInfo: [
                {
                    recipe: 'some-recipe'
                }
            ]
        });
    });

    it('should handle FETCH_RECIPES_FAIL', () => {
        const failAction = {
            type: actionTypes.FETCH_RECIPES_FAIL,
            error: 'some-error'
        };
        expect(reducer(initialState, failAction)).toEqual({
            ...initialState,
            recipesFetched: false,
            error: 'some-error'
        });
    });

    it.skip('should handle FILTER_RECIPES', () => {
        const filterAction = {
            type: actionTypes.FILTER_RECIPES,
            controlsInfo: {
                healthLabels: {
                    type: "checkboxGroup",
                    key: "healthLabelsGroup",
                    name: "healthLabels",
                    validationRequired: false,
                    touched: false,
                    title: "Health Options", // Title displayed in fieldset
                    groupItems: [
                        {
                            key: "veganHealthKey",
                            value: "vegan",
                            label: "Vegan",
                            checked: false
                        }
                    ]
                }
            }
        };
        expect(reducer({
            ...initialState,
            recipesInfo: [
                {
                    recipe: 'some-recipe'
                }
            ]
        }, filterAction)).toEqual({
            ...initialState,
            recipesInfo: [
                {
                    recipe: 'some-recipe'
                }
            ],
            recipesToDisplay: [
                {
                    recipe: 'some-recipe'
                }
            ]
        });
    });
});