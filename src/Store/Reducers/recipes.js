import * as actiontypes from '../Actions/actiontypes';

export const initialState = {
    error: null,
    fetchingRecipes: false,
    recipesFetched: false,
    recipesInfo: null,
    recipesToDisplay: null
}

const fetchRecipesStart = (state, action) => {
    return {
        ...state,
        fetchingRecipes: true,
        recipesFetched: false
    };
};

const fetchRecipesSuccess = (state, action) => {
    const { recipesInfo } = action;

    const updatedState = {
        ...state,
        error: null,
        fetchingRecipes: false,
        recipesFetched: true,
        recipesInfo: recipesInfo
    };

    return updatedState;
};

const fetchRecipesFail = (state, action) => {
    return {
        ...state,
        fetchingRecipes: false,
        recipesFetched: false,
        error: action.error
    };
};

const filterRecipes = (state, action) => {
    // const { recipesInfo } = { ...state };
    // let recipeHealthLabels = null;

    // if (!recipesInfo) return state;

    // const checkboxes = action.controlsInfo.healthLabels.groupItems;

    // // Establish healthLabels to filter by
    // const healthLabels = checkboxes.filter(chBox =>
    //     chBox.checked
    // ).map(chBox => chBox.label);

    // // Filter recipes according to healthLabels
    // const filteredRecipes = recipesInfo.filter(recipeInfo => {
    //     let isHealthLabel = true;

    //     healthLabels.forEach(healthLabel => {
    //         recipeHealthLabels = recipeInfo.recipe.healthLabels;

    //         if (!recipeHealthLabels.includes(healthLabel)) {
    //             isHealthLabel = false;
    //         }
    //     });

    //     return isHealthLabel;
    // });

    // const updatedState = {
    //     ...state,
    //     recipesToDisplay: filteredRecipes
    // }

    // // Put filtered recipes in recipesToDisplay in state and set recipesFetched to true
    // return updatedState;

    return state;
};

const sortRecipes = (state, action) => {
    // Sort by calories, 
    const { sortType } = action;
    const recipesInfo = [...state.recipesInfo];

    switch (sortType) {
        case 'calories-low-to-high':
            recipesInfo.sort((a, b) => {
                if (a.recipe.calories > b.recipe.calories) {
                    return 1;
                };
                if (b.recipe.calories > a.recipe.calories) {
                    return -1;
                };
                return 0;
            });
            break;
        case 'calories-high-to-low':
            recipesInfo.sort((a, b) => {
                if (a.recipe.calories > b.recipe.calories) {
                    return -1;
                };
                if (b.recipe.calories > a.recipe.calories) {
                    return 1;
                };
                return 0;
            });
            break;
        default:

            break;
    };

    const updatedState = {
        ...state,
        recipesInfo: recipesInfo
    };

    return updatedState;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes.FETCH_RECIPES_START: return fetchRecipesStart(state, action);
        case actiontypes.FETCH_RECIPES_SUCCESS: return fetchRecipesSuccess(state, action);
        case actiontypes.FETCH_RECIPES_FAIL: return fetchRecipesFail(state, action);
        case actiontypes.FILTER_RECIPES: return filterRecipes(state, action);
        case actiontypes.SORT_RECIPES: return sortRecipes(state, action);
        default: return state;
    };
};

export default reducer;