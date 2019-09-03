export const controlsConfigMock = {
    button_0: {
        type: 'button',
        name: 'button_0_name',
        text: 'button_0_text',
        disabled: false
    },
    button_1: {
        type: 'button',
        name: 'button_1_name',
        text: 'button_1_text',
        disabled: false
    },
    checkboxGroup_0: {
        type: "checkboxGroup",
        name: 'checkboxGroup_0_name',
        touched: false,
        title: "checkboxGroup_0_title", // Title displayed in fieldset
        groupItems: [
            {
                key: "chBx_0_0",
                value: "peanut-free",
                label: "Peanut Free",
                checked: false
            },
            {
                key: "chBx_0_1",
                value: "vegetarian",
                label: "Vegetarian",
                checked: false
            }
        ]
    },
    checkboxGroup_1: { 
        type: "checkboxGroup",
        name: 'checkboxGroup_1_name',
        touched: false,
        title: "checkboxGrou_1_title", // Title displayed in fieldset
        groupItems: [
            {
                key: "chBx_1_0",
                value: "vegan",
                label: "Vegan",
                checked: false
            },
            {
                key: "chBx_1_1",
                value: "alcohol-free",
                label: "Alcohol Free",
                checked: false
            }
        ]
    },
    textInput_0: {
        type: "text",
        name: "textInput_0_name",
        placeholder: "textInput_0_placeholder",
        value: "textInput_0_value",
        touched: false,
        validationRequired: true
    },
    textInputGroup_0: {
        type: "textInputGroup",
        key: "textInputGroup_0_key",
        title: "textInputGroup_0_title",
        name: "textInputGroup_0_name", // In group controls this name is applied to every element in the control (textInputs, checkboxes etc)
        groupItemTemplate: {
            key: "textInputGroup_template_0",
            id: "textInputGroup_0_0_id",
            placeholder: "placeholder_0",
            value: "",
            validationRequired: false,
            touched: false
        },
        groupItems: [
            {
                key: "textInputGroup_0_groupItem_0_key",
                id: "textInputGroup_0_groupItem_0_id",
                placeholder: "textInputGroup_0_groupItem_0_placeholder",
                value: "",
                validationRequired: false,
                touched: false
            },
        ],
        addGroupItemButton: {
            type: "addOptionButton",
            buttonControlParent: "textInputGroup_0",
            buttonKey: "textInputGroup_0_addGroupItem_key",
            buttonId: "textInputGroup_0_addGroupItem_id",
            buttonName: "textInputGroup_0_addGroupItem_name",
            buttonText: "textInputGroup_0_addGroupItem_text",
            disabled: false
        },
        deleteGroupItems: true // Ability to delete group items
    },
    textInputGroup_1: {
        type: "textInputGroup",
        key: "textInputGroup_1_key",
        title: "textInputGroup_1_title",
        name: "textInputGroup_1_name", // In group controls this name is applied to every element in the control (textInputs, checkboxes etc)
        groupItemTemplate: {
            key: "textInputGroup_template_1",
            id: "textInputGroup_1_1_id",
            placeholder: "placeholder_1",
            value: "",
            validationRequired: false,
            touched: false
        },
        groupItems: [
            {
                key: "textInputGroup_1_groupItem_0_key",
                id: "textInputGroup_1_groupItem_0_id",
                placeholder: "textInputGroup_1_groupItem_0_placeholder",
                value: "",
                validationRequired: false,
                touched: false
            },
        ],
        addGroupItemButton: {
            type: "addOptionButton",
            buttonControlParent: "textInputGroup_1",
            buttonKey: "textInputGroup_1_addGroupItem_key",
            buttonId: "textInputGroup_1_addGroupItem_id",
            buttonName: "textInputGroup_1_addGroupItem_name",
            buttonText: "textInputGroup_1_addGroupItem_text",
            disabled: false
        },
        deleteGroupItems: true // Ability to delete group items
    }
};