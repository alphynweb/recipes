// Balanced, High protein, Low fat, low carb, 

export const controlsConfig = {
    ingredients: {
        type: "textInputGroup",
        key: "Ingredients",
        title: "Ingredients",
        name: "ingredients", // In group controls this name is applied to every element in the control (textInputs, checkboxes etc)
        groupItemTemplate: {
            key: "ingredients_0",
            id: "ingredients_0",
            placeholder: "Enter Ingredient Here",
            value: "",
            validationRequired: false,
            touched: false
        },
        groupItems: [
            {
                key: "ingredients_1",
                id: "ingredients_1",
                placeholder: "Enter Ingredient Here",
                value: "",
                validationRequired: false,
                touched: false
            },
        ],
        maxNoGroupItems: 5,
        addGroupItemButton: {
            type: "addOptionButton",
            buttonControlParent: "ingredients",
            buttonKey: "ingredientsAddOptionButton",
            buttonId: "addIngredientButton",
            buttonName: "addIngredientButton",
            buttonText: "Add Ingredient",
            disabled: false
        },
        deleteGroupItems: true, // Ability to delete group items
        closed: false // Whetehr control section is closed or not
    },
    excludedIngredients: {
        type: "textInputGroup",
        key: "excludedIngredients",
        title: "Excluded Ingredients",
        name: "excludedIngredients", // In group controls this name is applied to every element in the control (textInputs, checkboxes etc)
        groupItemTemplate: {
            key: "excludedIngredients_0",
            id: "excludedIngredients_0",
            placeholder: "Enter Ingredient Here",
            value: "",
            validationRequired: false,
            touched: false
        },
        groupItems: [
            {
                key: "excludedIngredients_1",
                id: "excludedIngredients_1",
                placeholder: "Enter Ingredient Here",
                value: "",
                validationRequired: false,
                touched: false
            },
        ],
        maxNoGroupItems: 5,
        addGroupItemButton: {
            type: "addOptionButton",
            buttonControlParent: "excludedIngredients",
            buttonKey: "excludedIngredientsAddOptionButton",
            buttonId: "addExcludedIngredientButton",
            buttonName: "addExcludedIngredientButton",
            buttonText: "Add Excluded Ingredient",
            disabled: false
        },
        deleteGroupItems: true, // Ability to delete group items
        closed: true // Whetehr control section is closed or not
    },
    healthLabels: {
        type: "checkboxGroup",
        key: "healthLabelsGroup",
        name: "healthLabels",
        validationRequired: false,
        touched: false,
        title: "Health Options", // Title displayed in fieldset
        groupItems: [
            {
                key: "healthLabels_1",
                value: "alcohol-free",
                label: "Alcohol-Free",
                checked: false
            },
            {
                key: "healthLabels_2",
                value: "peanut-free",
                label: "Peanut-Free",
                checked: false
            },
            {
                key: "healthLabels_3",
                value: "sugar-conscious",
                label: "Sugar-Conscious",
                checked: false
            },
            {
                key: "healthLabels_4",
                value: "tree-nut-free",
                label: "Tree-Nut-Free",
                checked: false
            },
            {
                key: "healthLabels_5",
                value: "vegan",
                label: "Vegan",
                checked: false
            },
            {
                key: "healthLabels_6",
                value: "vegetarian",
                label: "Vegetarian",
                checked: false
            }
        ],
        closed: true
    },
    dietLabels: {
        type: "checkboxGroup",
        key: "dietLabelsGroup",
        name: "dietLabels",
        validationRequired: false,
        touched: false,
        title: "Diet Options", // Title displayed in fieldset
        groupItems: [
            {
                key: "dietLabels_1",
                value: "balanced",
                label: "Balanced",
                checked: false
            },
            {
                key: "dietLabels_2",
                value: "high-protein",
                label: "High Protein",
                checked: false
            },
            {
                key: "dietLabels_3",
                value: "low-carb",
                label: "Low Carb",
                checked: false
            },
            {
                key: "dietLabels_4",
                value: "low-fat",
                label: "Low Fat",
                checked: false
            }
        ],
        closed: true
    }
};