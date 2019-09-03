import * as actionTypes from './actiontypes';

export const showModal = () => {
    return {
        type: actionTypes.SHOW_MODAL
    };
};

export const hideModal = () => {
    return {
        type: actionTypes.HIDE_MODAL
    };
};

export const setModalContent = (modalContent) => {
    return {
        type: actionTypes.SET_MODAL_CONTENT,
        modalContent: modalContent
    }
};