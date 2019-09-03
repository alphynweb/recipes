import * as actionTypes from '../Actions/actiontypes';

import { controlsConfig } from '../../config/controls';

export const initialState = {
    ...controlsConfig
};

const updateControl = (state, action) => {
    const { controlIdentifier, controlType, controlParent, value } = action;

    let groupItemIndex;
    let groupItemsArray;
    let currentGroupItem;

    let updatedControl = null;
    let updatedState = { ...state };

    switch (controlType) {
        case 'text':
            updatedControl = {
                ...state[controlIdentifier],
                value: value
            };

            updatedState = {
                ...state,
                [controlIdentifier]: updatedControl
            };
            break;
        case 'textInputGroup':
            groupItemIndex = state[controlParent].groupItems.findIndex(groupItem => groupItem.key === controlIdentifier);
            groupItemsArray = [...state[controlParent].groupItems];
            currentGroupItem = { ...state[controlParent].groupItems[groupItemIndex] };

            const updatedGroupItem = {
                ...currentGroupItem,
                value: value
            };

            groupItemsArray[groupItemIndex] = updatedGroupItem;

            updatedControl = {
                ...state[controlParent],
                groupItems: groupItemsArray
            };

            updatedState = {
                ...state,
                [controlParent]: updatedControl
            };

            break;
        case 'checkboxGroup':
            groupItemIndex = state[controlParent].groupItems.findIndex(groupItem => groupItem.key === controlIdentifier);
            groupItemsArray = [...state[controlParent].groupItems];
            currentGroupItem = { ...state[controlParent].groupItems[groupItemIndex] };
            const isChecked = currentGroupItem.checked;

            const updatedCheckbox = {
                ...currentGroupItem,
                checked: !isChecked
            };

            groupItemsArray[groupItemIndex] = updatedCheckbox;

            updatedControl = {
                ...state[controlParent],
                groupItems: groupItemsArray
            };

            updatedState = {
                ...state,
                [controlParent]: updatedControl
            };
            break;
        default:
            break;
    };

    return updatedState;
};

const disableControl = (state, action) => {
    const { controlIdentifier } = action;

    const updatedControl = {
        ...state[controlIdentifier],
        disabled: true
    };

    const updatedState = {
        ...state,
        [controlIdentifier]: updatedControl
    };

    return updatedState;
};

const enableControl = (state, action) => {
    const { controlIdentifier } = action;

    const updatedControl = {
        ...state[controlIdentifier],
        disabled: false
    };

    const updatedState = {
        ...state,
        [controlIdentifier]: updatedControl
    };

    return updatedState;
};

const addGroupItem = (state, action) => {
    const controlParent = action.controlParent;
    const groupItems = [
        ...state[controlParent].groupItems
    ];

    // Sample properties of group item to replicate
    const groupItemTemplate = { ...state[controlParent].groupItemTemplate };

    // Find out highest value key of controlParent groupItems to generate new key
    const groupItemsKeys = groupItems.map(groupItem =>
        groupItem.key.replace(action.controlParent + '_', '')
    )

    let highestKey;

    if (!groupItemsKeys.length) {
        highestKey = 1;
    } else {
        highestKey = Math.max(...groupItemsKeys);
    }

    const newKey = action.controlParent + '_' + (highestKey + 1);

    const newGroupItem = {
        ...groupItemTemplate,
        key: newKey,
        id: newKey
    };

    groupItems.push(newGroupItem);

    const updatedControlParent = {
        ...state[controlParent],
        groupItems: groupItems
    };

    const updatedState = {
        ...state,
        [controlParent]: updatedControlParent
    };

    return updatedState;
};

const deleteGroupItem = (state, action) => {
    const { controlIdentifier, controlParent } = action;

    const groupItemsArray = state[controlParent].groupItems.concat();

    const groupItemIndex = groupItemsArray.findIndex(groupItem =>
        groupItem.id === controlIdentifier
    );

    groupItemsArray.splice(groupItemIndex, 1);

    const updatedControl = {
        ...state[controlParent],
        groupItems: groupItemsArray
    };

    const updatedState = {
        ...state,
        [controlParent]: updatedControl
    };

    return updatedState;
};

const toggleControlOpen = (state, action) => {
    const { controlIdentifier } = action;

    const updatedControl = {
        ...state[controlIdentifier],
        closed: !state[controlIdentifier].closed
    };

    const updatedState = {
        ...state,
        [controlIdentifier]: updatedControl
    };

    return updatedState;
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_GROUP_ITEM: return addGroupItem(state, action);
        case actionTypes.DELETE_GROUP_ITEM: return deleteGroupItem(state, action);
        case actionTypes.UPDATE_CONTROL: return updateControl(state, action);
        case actionTypes.DISABLE_CONTROL: return disableControl(state, action);
        case actionTypes.ENABLE_CONTROL: return enableControl(state, action);
        case actionTypes.TOGGLE_CONTROL_OPEN: return toggleControlOpen(state, action);
        default: return state;
    };
};

export default reducer;