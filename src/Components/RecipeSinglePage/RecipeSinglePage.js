import React from 'react';

import Ingredients from '../Ingredients/Ingredients';

const RecipeSinglePage = (props) => {
    const { recipe } = props.location;
    const { image, ingredients, label, totalWeight, url } = recipe;
    const totalYield = recipe.yield; // totalYield because yield is a reserved word

    return (
        <>
            <h1>{label}</h1>
            <img src={image} alt="" />
            <Ingredients
                ingredients={ingredients} />
            <a href={url} target="_blank">{url}</a>
        </>
    );
};

export default RecipeSinglePage;