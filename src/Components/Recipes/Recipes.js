import React from 'react';
import PropTypes from 'prop-types';

import Recipe from './Recipe/Recipe';

import './Recipes.scss';

const Recipes = (props) => {
    const { onRecipeClicked, recipesInfo } = props;

    const jsxBuffer = recipesInfo.map((recipeInfo, index) =>
        <Recipe
            key={index}
            recipeNumber={index}
            clicked={onRecipeClicked}
            recipeInfo={recipeInfo} />
    );

    return (
        <div className="recipes">
            {jsxBuffer}
        </div>
    );
};

Recipes.propTypes = {
    onRecipeClicked: PropTypes.func.isRequired,
    recipesInfo: PropTypes.array.isRequired
};

export default Recipes;