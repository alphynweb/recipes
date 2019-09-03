import React from 'react';
import PropTypes from 'prop-types';

import Ingredients from '../../Ingredients/Ingredients';

import './ModalRecipe.scss';

const ModalRecipe = (props) => {
    const { recipeInfo } = props;
    const {
        calories,
        image,
        ingredients,
        label,
        url
    } = recipeInfo;

    const modalRecipeStyle = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className='modal-recipe' style={modalRecipeStyle}>
            <div className='recipe-details'>
                <h1>{label}</h1>
                <h2>Ingredients</h2>
                <Ingredients
                    ingredients={ingredients} />
                <h3>Calories: {Math.round(calories)}</h3>
                <a href={url} className='button'
                    target="_blank"
                    rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
};

ModalRecipe.propTypes = {
    recipeInfo: PropTypes.object.isRequired
};

export default ModalRecipe;