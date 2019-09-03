import * as actions from '../index';
import * as actionTypes from '../actiontypes';

describe('Modal Actions', () => {
    it('should create an action to show the modal', () => {
        const expectedAction = {
            type: actionTypes.SHOW_MODAL
        };
        expect(actions.showModal()).toEqual(expectedAction);
    });

    it('should should create an action to hide the modal', () => {
        const expectedAction = {
            type: actionTypes.HIDE_MODAL
        };
        expect(actions.hideModal()).toEqual(expectedAction);
    });

    it ('should create an action to set the modal content', () => {
        const expectedAction = {
            type: actionTypes.SET_MODAL_CONTENT,
            modalContent: '<p>Some modal content</p>'
        };
        expect(actions.setModalContent('<p>Some modal content</p>')).toEqual(expectedAction);
    });
});