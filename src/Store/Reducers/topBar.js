import * as actionTypes from '../Actions/actiontypes';

export const initialState = {
    showControls: true
};

const toggleControls = (state, action) => {
    const updatedState = {
        ...state,
        showControls: !state.showControls
    };

    return updatedState;
};
 
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_CONTROLS: return toggleControls(state, action);
        default: return state;
    };
};

export default reducer;