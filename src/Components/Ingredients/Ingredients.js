import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient/Ingredient';

const Ingredients = (props) => {
    const { ingredients } = props;

    const jsxBuffer = ingredients.map(ingredientInfo =>
        <Ingredient
            key={ingredientInfo.text}
            ingredientInfo={ingredientInfo} />
    );

    return (
        <ul>
            {jsxBuffer}
        </ul>
    );
};

Ingredients.propTypes = {
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            weight: PropTypes.number
        })
    )
};

export default Ingredients;