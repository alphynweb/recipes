import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = (props) => {
    const { text } = props.ingredientInfo;

    return (
        <li>
            <p>{text}</p>
        </li>
    );
};

Ingredient.propTypes = {
    ingredientInfo: PropTypes.shape({
        text: PropTypes.string,
        weight: PropTypes.number
    })
};

export default Ingredient;