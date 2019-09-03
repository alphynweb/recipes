import * as actionTypes from './actiontypes';
import { filterRecipes } from './recipes';

export const controlClicked = (event, controlType, controlIdentifier, controlParent) => {
    return (dispatch, getState) => {
        dispatch(updateControl(event, controlType, controlIdentifier, controlParent));

        // getState is used by Redux Thunk to access the store
        const state = getState();
        const controlsInfo = state.controls;

        dispatch(filterRecipes(controlsInfo));
    };
};

export const updateControl = (event, controlType, controlIdentifier, controlParent) => {
    const value = event ? event.target.value : null;

    return {
        type: actionTypes.UPDATE_CONTROL,
        controlType: controlType,
        controlIdentifier: controlIdentifier,
        controlParent: controlParent,
        value: value
    };
};

export const deleteGroupItem = (controlIdentifier, controlParent) => {
    return {
        type: actionTypes.DELETE_GROUP_ITEM,
        controlIdentifier: controlIdentifier,
        controlParent: controlParent
    }
};

export const addGroupItem = (controlParent) => {
    return {
        type: actionTypes.ADD_GROUP_ITEM,
        controlParent
    }
};

export const disableControl = (controlIdentifier) => {
    return {
        type: actionTypes.DISABLE_CONTROL,
        controlIdentifier
    };
};

export const enableControl = (controlIdentifier) => {
    return {
        type: actionTypes.ENABLE_CONTROL,
        controlIdentifier
    };
};

export const toggleControlOpen = (controlIdentifier) => {
    return {
        type: actionTypes.TOGGLE_CONTROL_OPEN,
        controlIdentifier
    };
};