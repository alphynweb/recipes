// Returns array of ingredient names extracted from ingredients textInputGroup groupItems info
export const extractIngredients = (ingredientsInfo) => {
    // Convert ingredients in to array of names
    if (!ingredientsInfo) return [];

    const ingredients = ingredientsInfo.filter(ingredientInfo =>
        ingredientInfo.value.length
    ).map(ingredientInfo =>
        ingredientInfo.value.trim().toLowerCase());

    return ingredients;
};

// Return array of healthLabels names extracted from health Labels checkboxGroup groupItems info
export const extractLabels = (labelsInfo) => {
    if(!labelsInfo) return [];

    const labels = labelsInfo.filter(labelInfo =>
        labelInfo.checked
    ).map(labelInfo =>
        labelInfo.value
    );

    return labels;
};