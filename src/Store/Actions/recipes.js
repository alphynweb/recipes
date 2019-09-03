import * as actionTypes from './actiontypes';

import axios from 'axios';

export const fetchRecipesStart = () => {
    return {
        type: actionTypes.FETCH_RECIPES_START
    }
};

export const fetchRecipes = (searchParams) => {
    const { ingredients, excludedIngredients, dietLabels, healthLabels } = searchParams;
    let ingredientsParams = '';
    let excludedIngredientsParams = '';
    let healthParams = '';
    let dietParams = '';

    ingredients.forEach((ingredient, index) => {
        index === 0 ? ingredientsParams += '&q=' + ingredient : ingredientsParams += '+' + ingredient;
    });

    excludedIngredients.forEach(excludedIngredient => {
        excludedIngredientsParams += '&excluded=' + excludedIngredient
    });

    healthLabels.forEach(healthLabel => {
        healthParams += '&health=' + healthLabel;
    });

    dietLabels.forEach(dietLabel => {
        dietParams += '&diet=' + dietLabel;
    });

    // EDAMAM INFO
    const appId = '48422c37';
    const appKey = '7cc089ce32ccf61fa138ca3c632cc393';

    // Build url
    const url = 'https://api.edamam.com/search?'

        // App Id
        + 'app_id='
        + appId

        // App Key
        + '&app_key='
        + appKey

        // Ingredients
        + ingredientsParams

        // Excluded Ingredients
        + excludedIngredientsParams

        // Health labels
        + healthParams

        // Diet labels
        + dietParams

        // First result index
        + '&from=0'

        // last result index
        + '&to=50'

    console.log('Url ', url);

    return (dispatch, getState) => {
        dispatch(fetchRecipesStart());

        return axios.get(url)
            .then(result => {
                const recipesInfo = result.data.hits;
                dispatch(fetchRecipesSuccess(recipesInfo));
            })
            .catch(error => {
                dispatch(fetchRecipesFail(error))
            });
    };
};

export const fetchRecipesSuccess = (recipesInfo) => {
    return {
        type: actionTypes.FETCH_RECIPES_SUCCESS,
        recipesInfo: recipesInfo
    }
};

export const fetchRecipesFail = (error) => {
    return {
        type: actionTypes.FETCH_RECIPES_FAIL,
        error: error
    }
};

export const filterRecipes = (controlsInfo) => {
    return {
        type: actionTypes.FILTER_RECIPES,
        controlsInfo: controlsInfo
    };
};

export const sortRecipes = (sortType) => {
    return {
        type: actionTypes.SORT_RECIPES,
        sortType
    };
};

export const recipeClicked = (recipeInfo) => {
    return {
        type: actionTypes.RECIPE_CLICKED,
        recipeInfo: recipeInfo
    };
};