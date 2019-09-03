import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../index';
import * as actionTypes from '../actiontypes';

import mockAxios from '../../../__mocks__/axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// SYNC ACTIONS
describe('Recipes actions', () => {
    it('should create an action to start fetching the recipes', () => {
        const expectedAction = {
            type: actionTypes.FETCH_RECIPES_START
        };
        expect(actions.fetchRecipesStart()).toEqual(expectedAction);
    });

    it('should create an action for fetch recipes success', () => {
        const recipesInfo = {

        };
        const expectedAction = {
            type: actionTypes.FETCH_RECIPES_SUCCESS,
            recipesInfo: recipesInfo
        };
        expect(actions.fetchRecipesSuccess(recipesInfo)).toEqual(expectedAction);
    });

    it('should create an action for fetch recipes fail', () => {
        const error = "Fetch Recipes Error";
        const expectedAction = {
            type: actionTypes.FETCH_RECIPES_FAIL,
            error: error
        };
        expect(actions.fetchRecipesFail(error)).toEqual(expectedAction);
    });

    it('should create an action to filter the recipes', () => {
        const controlsInfo = {
            controls: "controls"
        };
        const expectedAction = {
            type: actionTypes.FILTER_RECIPES,
            controlsInfo: controlsInfo
        };
        expect(actions.filterRecipes(controlsInfo)).toEqual(expectedAction);
    });

    // RECIPE_CLICKED
    it('should create an action to open the details about a recipe when the recipe thumbnail is clicked', () => {
        const recipeInfo = {};
        
        const expectedAction = {
            type: actionTypes.RECIPE_CLICKED,
            recipeInfo: recipeInfo
        };
        expect(actions.recipeClicked(recipeInfo)).toEqual(expectedAction);
    });
});

// ASYNC ACTIONS
describe('Recipes async actions', () => {
    // Custom matchers
    beforeEach(() => {
        expect.extend({
            urlIncludes(received, expected) {
                const urlToTest = received;
                const pass = urlToTest.includes(expected);
                if (pass) {
                    return {
                        message: () => '',
                        pass: true
                    }
                } else {
                    return {
                        message: () => `The ingredients section of the url is incorrect. ${received} does not include ${expected}`,
                        pass: false
                    }
                }
            }
        });
    });

    afterEach(() => {
        mockAxios.get.mockClear();
    });

    it('creates FETCH_RECIPES_START when starting to FETCH_RECIPES and then FETCH_RECIPES_SUCCESS when FETCH_RECIPES is successful', () => {
        const expectedActions = [
            {
                type: actionTypes.FETCH_RECIPES_START
            },
            {
                type: actionTypes.FETCH_RECIPES_SUCCESS,
                recipesInfo: [
                    {
                        Recipe: "Recipe"
                    }
                ]
            }
        ];

        const searchParams = {
            ingredients: ["ingredients"],
            excludedIngredients: [],
            healthLabels: [],
            dietLabels: []
        };

        const store = mockStore({});

        return store.dispatch(actions.fetchRecipes(searchParams))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });

    });

    it('should create the ingredients part of the url correctly', () => {

        const ingredients = [
            "bacon",
            "cheese",
            "mushrooms"
        ];

        const excludedIngredients = [];

        const healthLabels = [];

        const dietLabels = [];

        const searchParams = {
            ingredients,
            excludedIngredients,
            healthLabels,
            dietLabels
        };

        const store = mockStore({});


        return store.dispatch(actions.fetchRecipes(searchParams))
            .then(() => {
                const receivedUrl = mockAxios.get.mock.calls[0][0];
                expect(receivedUrl).urlIncludes('&q=bacon+cheese+mushrooms');
            });
    });

    it('should create the healthLabels part of the url correctly', () => {

        const healthLabels = [
            "vegan",
            "peanut-free",
            "vegetarian"
        ];

        const searchParams = {
            ingredients: [],
            excludedIngredients: [],
            healthLabels: healthLabels,
            dietLabels: []
        };

        const store = mockStore({});

        return store.dispatch(actions.fetchRecipes(searchParams))
            .then(() => {
                const receivedUrl = mockAxios.get.mock.calls[0][0];
                expect(receivedUrl).urlIncludes('&health=vegan&health=peanut-free&health=vegetarian');
            });
    });

    it('should create the entire url correctly', () => {
        const ingredients = [
            "cheese",
            "spinach",
            "ham"
        ];

        const excludedIngredients = [
            'bacon',
            'eggs'
        ];

        const healthLabels = [
            "vegetarian",
            "alcohol-free"
        ];

        const dietLabels = [
            'high-protein',
            'low-carb'
        ];

        const searchParams = {
            ingredients,
            excludedIngredients,
            healthLabels,
            dietLabels
        };

        const store = mockStore({});

        return store.dispatch(actions.fetchRecipes(searchParams))
            .then(() => {
                const receivedUrl = mockAxios.get.mock.calls[0][0];
                expect(receivedUrl).toBe(
                    'https://api.edamam.com/search?app_id=48422c37&app_key=7cc089ce32ccf61fa138ca3c632cc393&q=cheese+spinach+ham&excluded=bacon&excluded=eggs&health=vegetarian&health=alcohol-free&diet=high-protein&diet=low-carb&from=0&to=50'
                );
            });
    });
});


