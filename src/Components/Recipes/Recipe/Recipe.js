import React from 'react';
import PropTypes from 'prop-types';

import './Recipe.scss';

const Recipe = (props) => {
    const { clicked, recipeInfo } = props;
    const { recipe } = recipeInfo;
    const { label, image } = recipe;

    return (
        <div className="recipe" onClick={() => clicked(recipe)}>
            <h2>{label}</h2>
            <img src={image} alt="" />
        </div>
    );
};

Recipe.propTypes = {
    recipeInfo: PropTypes.object.isRequired,
    clicked: PropTypes.func.isRequired
};

export default Recipe;