import * as actionTypes from '../Actions/actiontypes';

const initialState = {
    showModal: false,
    modalContent: null
};

const showModal = (state, action) => {
    return {
        ...state,
        showModal: true
    };
};

const hideModal = (state, action) => {
    return {
        ...state,
        showModal: false
    };
};

const setModalContent = (state, action) => {
    const {modalContent} = action;

    return {
        ...state,
        modalContent: modalContent
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL: return showModal(state, action);
        case actionTypes.HIDE_MODAL: return hideModal(state, action);
        case actionTypes.SET_MODAL_CONTENT: return setModalContent(state, action);
        default: return state;
    };
};

export default reducer;